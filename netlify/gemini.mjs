const GEMINI_API_KEY = "AQ.Ab8RN6JOXf2zRJXjKEf90DX87gvxou2SYLq0l2LUZWcCn2bPUg";
const MODEL = "gemini-3.6-flash";

export default async (request) => {
  if (request.method !== "POST") {
    return Response.json({ error: { message: "Método não permitido" } }, { status: 405 });
  }

  try {
    const payload = await request.json();
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${encodeURIComponent(GEMINI_API_KEY)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );

    const data = await response.json();
    return Response.json(data, {
      status: response.status,
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    return Response.json(
      { error: { message: `Falha ao consultar o Gemini: ${error.message}` } },
      { status: 502, headers: { "Cache-Control": "no-store" } },
    );
  }
};
