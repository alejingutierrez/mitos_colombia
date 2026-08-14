import { NextResponse } from "next/server";
import { getTarotProduct } from "../../../../lib/tarot-commerce";

export async function POST(request) {
  const product = getTarotProduct();
  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida" }, { status: 400 });
  }

  const quantity = Number.parseInt(body?.quantity, 10);
  if (body?.sku !== product.sku || !Number.isInteger(quantity) || quantity < 1 || quantity > 8) {
    return NextResponse.json({ error: "Producto o cantidad inválida" }, { status: 400 });
  }

  if (!product.commercialReady) {
    return NextResponse.json(
      {
        error: "commerce_not_ready",
        message: "La compra se habilitará cuando precio, disponibilidad y envío estén confirmados.",
        missing: product.missingCommercialFields,
      },
      { status: 409 }
    );
  }

  return NextResponse.json({
    item: {
      sku: product.sku,
      name: product.name,
      quantity,
      priceCop: product.priceCop,
      currency: product.currency,
    },
  });
}
