import { useParams } from "next/navigation";
import { useMemo } from "react";

interface ITParams {
    conversationId: string;
};

const useParamWrapper = () => {
    const params = useParams();
    if (params.pageId) return params as unknown as ITParams;
    throw new Error('Parameter must be pageId!');
}

const useConversation = () => {
    const params = useParamWrapper();

    const conversationId = useMemo(()=>{
        if (!params?.conversationId) {
            return '';
        }

        return params.conversationId;
    },[params?.conversationId]);

    console.log(conversationId,'id memo')

    const isOpen = useMemo(()=>!!conversationId,[conversationId]);
    
    return useMemo(()=>({
        isOpen,
        conversationId
    }),[isOpen,conversationId])
}

export default useConversation;