"use client";

import { useState } from "react";
import { SectionHeader, CommentItem, EmptyState } from "../molecules";
import { Avatar, Label, Textarea, Button, Divider, Count } from "../atoms";

/**
 * Organismo · CommentThread
 * Hilo de comentarios con formulario de publicación. Presentacional y
 * props-driven: no envía a ningún backend. Al publicar dispara `onSubmit(body)`
 * (o un console.log de respaldo) y limpia el textarea.
 *
 * Props:
 * - comments?: [{ author, date, body }]  — lista de comentarios existentes.
 * - onSubmit?: (body: string) => void      — callback al publicar.
 */

const DEFAULT_COMMENTS = [
  {
    author: "Valentina Restrepo",
    date: "hace 2 días",
    body: "Mi abuela en Santander contaba esta misma historia pero decía que la Madremonte castigaba a quienes talaban los árboles sin permiso. Bello ver la versión recopilada aquí.",
  },
  {
    author: "Andrés Mosquera",
    date: "hace 5 días",
    body: "En el Pacífico conocemos una variante muy parecida junto al río. Gracias por documentar estas voces que se estaban perdiendo.",
  },
];

export function CommentThread({ comments = DEFAULT_COMMENTS, onSubmit }) {
  const [body, setBody] = useState("");
  const trimmed = body.trim();
  const hasComments = comments.length > 0;

  function handleSubmit(event) {
    event.preventDefault();
    if (!trimmed) return;
    if (onSubmit) {
      onSubmit(trimmed);
    } else {
      // Demo presentacional: sin backend.
      console.log("Nuevo comentario:", trimmed);
    }
    setBody("");
  }

  return (
    <section className="mx-auto w-full max-w-2xl" aria-label="Comentarios">
      <SectionHeader
        eyebrow="Conversación"
        title={
          <span className="inline-flex items-center gap-2.5">
            Comentarios
            <Count variant="jungle" className="translate-y-px">
              {comments.length}
            </Count>
          </span>
        }
      />

      <form onSubmit={handleSubmit} className="mt-8">
        <div className="mb-3 flex items-center gap-3">
          <Avatar name="Tú" size={36} className="shrink-0" />
          <Label htmlFor="comment-body" className="mb-0">
            Comparte tu versión o comentario
          </Label>
        </div>
        <Textarea
          id="comment-body"
          rows={4}
          value={body}
          onChange={(event) => setBody(event.target.value)}
          placeholder="Escribe tu comentario…"
        />
        <div className="mt-3 flex justify-end">
          <Button type="submit" variant="primary" disabled={!trimmed}>
            Publicar comentario
          </Button>
        </div>
      </form>

      <Divider className="my-8" />

      {hasComments ? (
        <ul className="flex flex-col">
          {comments.map((comment, index) => (
            <li key={index}>
              {index > 0 ? <Divider className="my-6" /> : null}
              <CommentItem author={comment.author} date={comment.date}>
                {comment.body}
              </CommentItem>
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState
          motif="tucan"
          title="Aún no hay comentarios"
          description="Sé la primera persona en compartir tu versión."
        />
      )}
    </section>
  );
}
