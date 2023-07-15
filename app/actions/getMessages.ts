import primsma from "@/app/libs/prismadb";

const getMessages = async ( conversationId: string) => {
    try {
        const messages = await primsma.message.findMany({
            where: {
                conversationId: conversationId
            },
            include: {
                sender: true,
                seen: true
            },
            orderBy: {
                createAt: 'asc'
            }
        });
        return messages;
    } catch (err:any) {
        return [];
    }
}

export default getMessages;