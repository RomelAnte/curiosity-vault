# Contribuir a Curiosity Vault

Gracias por tu interés en mejorar Curiosity Vault. El proyecto reúne guías prácticas y colecciones abiertas sobre aprendizaje, empleabilidad, proyectos, hábitos, salud y tecnología. El contenido actual se organiza en guías individuales y colecciones temáticas para mantener juntas las notas que tratan del mismo tema.

## Formas de contribuir

- **Mejorar contenido:** proponer correcciones, aclaraciones, fuentes o ejemplos en los archivos Markdown de `contenido/`.
- **Añadir una guía o colección:** sugerir un tema que no esté ya cubierto. Si hay varias notas o ideas grandes sobre un tema, considera agruparlas en una colección o proponer títulos con una idea central cada uno.
- **Corregir referencias:** identificar enlaces rotos, datos desactualizados, títulos incompletos o recursos que necesiten contexto.
- **Traducir:** proponer una traducción de una guía o colección existente.
- **Mejorar el sitio:** corregir errores o proponer cambios de accesibilidad, funcionalidad o rendimiento. Describe claramente el efecto esperado si el cambio altera la presentación.

## Principios editoriales

- Distingue las ideas de apuntes personales, la información respaldada por fuentes y las reflexiones u opiniones editoriales.
- No presentes una experiencia personal, una frase popular ni una recomendación como hecho universal.
- Para afirmaciones factuales importantes, aporta fuentes fiables y enlaza la página o estudio que las respalda. Prioriza fuentes originales, organizaciones profesionales, universidades, instituciones oficiales y estudios revisados por pares.
- Si una afirmación no puede comprobarse, indícala como **sin verificar** o déjala como una pregunta; no la completes por conjetura. Si las fuentes discrepan, explica la diferencia.
- No prometas resultados de salud, finanzas, empleo o negocio. El contenido de salud no sustituye la evaluación de un profesional; las decisiones financieras no son asesoría personalizada.
- Trata a las personas con respeto y protege su privacidad. No añadas datos personales sin autorización.
- Conserva los créditos y la procedencia de los apuntes o materiales. Los archivos `.txt` locales son fuentes privadas: no los añadas a un commit ni los publiques.

## Elegir entre guía y colección

Una **guía** desarrolla una idea central con contexto y pasos aplicables. Una **colección** reúne apuntes, recursos o varias piezas relacionadas que conviene consultar juntas. Antes de crear un documento, busca en `contenido/guias/` y `contenido/colecciones/` para evitar duplicar un tema. Si una propuesta mezcla varias ideas centrales, explica primero cómo las separarías; no publiques esa división hasta acordar el alcance en la conversación o issue.

## Flujo recomendado

1. Busca si el tema o recurso ya aparece en `contenido/` y revisa las convenciones de los documentos cercanos.
2. Para un tema nuevo, una separación de contenido o un cambio amplio, abre un issue con el objetivo y, cuando aplique, la propuesta de títulos y alcance.
3. Trabaja en una rama descriptiva, por ejemplo `contenido/actualizar-empleo`, `fix/enlace-roto` o `i18n/traducir-guia`.
4. Edita únicamente los archivos necesarios. Conserva el formato Markdown y actualiza la fecha editorial del documento cuando corresponda.
5. Comprueba los enlaces y ejecuta `npm run build` si cambias contenido o código del sitio.
6. Abre un pull request enlazando el issue y resume qué cambiaste, por qué, las fuentes utilizadas y las comprobaciones realizadas.

Toda contribución se revisa antes de integrarse. Abrir un issue ayuda a acordar el alcance de cambios grandes y a evitar trabajo duplicado.

## Licencia

El contenido se publica bajo la licencia CC BY 4.0 (consulta `LICENSE.md`). Al enviar una contribución, confirmas que tienes derecho a compartirla bajo esa licencia y que atribuyes las fuentes cuando sea necesario.

## ¿Dudas?

Abre un issue para preguntar por el alcance, la estructura, las fuentes o el proceso de contribución.
