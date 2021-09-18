import { useEffect, useState } from "react";
import { firestore } from "../firebase/config";

const useFirestore = (collection: string) => {
    const [documents, setDocuments] = useState([null])

    useEffect(() => {
        const unsub = firestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let docs: any[] = []
                snap.forEach(doc => {
                    docs.push({...doc.data(), id: doc.id})
                })
                setDocuments(docs)
            })
        return () => {
            unsub();
        }
    }, [collection])
    
    return {documents}
}

export default useFirestore