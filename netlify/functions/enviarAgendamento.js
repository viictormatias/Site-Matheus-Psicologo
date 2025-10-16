export async function handler(event, context) {
    if (event.httpMethod === "OPTIONS") {
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
            },
            body: "",
        };
    }

    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: "Method Not Allowed",
        };
    }

    try {
        const dados = JSON.parse(event.body);

        // 👉 Substitui aqui pela URL do teu Apps Script
        const scriptUrl = "https://script.google.com/macros/s/AKfycbx7yQgaVUhDteS12Kc_DPUURIhBUvVCDQPFfp0qMW--6R5VPfqu9WDiJCYl3fkK76CV/exec";

        const resposta = await fetch(scriptUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados),
        });

        let data;
        try {
            data = await resposta.json();
        } catch {
            data = await resposta.text(); // fallback caso venha HTML
        }


        return {
            statusCode: 200,
            headers: { "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify(data),
        };

    } catch (err) {
        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({ erro: err.message }),
        };
    }
}
