# QA · wayuu-bible-02b-origenes-anclas-correction-medium

Fecha: 2026-09-03

## el-origen-del-fuego__ancla--canon

- Estado: `REJECT_REAL_MATERIAL_PHOTOGRAPHY`
- SHA-256: `bd9bdfdcbb81c6f7944b3f8202207ccd8678dbf412eb20cac5698a06d9eed746`
- Pasa contenido: Siki ya existe como cavidad, madera carbonizada, ceniza y
  brasa contenida.
- Falla técnica: parece fotografía de barro, leña y carbón reales; no revela
  papel, fibras, cantos o pliegues de maqueta artesanal.

## waleker-el-origen-del-tejido__ancla--canon

- Estado: `REJECT_CROSS_MODEL_PROMPT_CONTAMINATION`
- SHA-256: `bbac965a7578f73b1c4392e8403d18d364ddc2d9a52da43dd72c2f3eee154068`
- Falla contenido: volvió a generar un fogón y omitió por completo araña,
  telar y tejido.
- Causa: las salvaguardas específicas de Siki y Waleker se copiaban juntas a
  todos los prompts del lote.
- Corrección de pipeline: el preparador ahora combina reglas comunes con
  `model_safeguards[model_id]`; ninguna regla de otro modelo entra en el prompt.
