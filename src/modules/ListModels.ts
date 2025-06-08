import OpenAI from "openai";

const ListModels = async (openai: OpenAI) => {

    try {
        const response = await openai.models.list();
        console.log("API Request Successful!");
        response.data.forEach((model) => {
            console.log(`- ${model.id}`);
        });
    } catch (error) {
        console.error(`API Request Failed: ${error}`);
    }
}

const BasicChat = async (client: OpenAI) => {
    try {
        const response = await client.chat.completions.create({
            model: "gpt-3.5-turbo",
            // TODO: Configure system and user prompts below
            messages: [
                { role: "system", content: "" },
                { role: "user", content: "" },
            ],
        });
        console.log("API Request Successful!");
        console.log(`Response: ${response.choices[0].message.content}`);
    } catch (error) {
        console.error(`API Request Failed: ${error}`);
    }
}

export { ListModels, BasicChat };