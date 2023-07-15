import { motion } from "framer-motion";
import Image from "next/image";
import { PhotoMomentProps } from "@/data/interfaces";
import { hide, show } from "@/data/mocks";
import { useEffect } from "react";

export function PhotoMoment({ index, showMoments, closeMoments }: PhotoMomentProps) {

    useEffect(() => {
        setTimeout(() => {
            closeMoments();
        }, 8000);
    }, []);

    function returnPhrases() {
        switch (index) {
            case 1:
                return (
                    <>
                        <p>&quot;Se por te beijar eu fosse condenada ao inferno, assim eu faria. Pois assim, poderia me gabar aos demônios que estive no paraíso sem ao menos ter entrado no céu&quot;</p>
                        <span className="italic text-sm" style={{ color: '#406E8E' }}>- Van Gogh</span>
                    </>
                );

            case 2:
                return (
                    <>
                        <p>&quot;Te encontrei nessa vida, e quero te encontrar na próxima porque uma vida só é pouco para te amar&quot;</p>
                        <span className="italic text-sm" style={{ color: '#406E8E' }}>- Adaptação de William Shakespeare</span>
                    </>
                )
            default:
                break;
        }
    }

    return (
        <motion.div animate={showMoments ? show : hide} className="text-center">
            {returnPhrases()}
            <Image
                alt={`Photo moment ${index}`}
                src={`/images/photo${index}.jpeg`}
                width="500"
                height="500"
                className="mx-auto mt-3 photo-moment"
            />
        </motion.div>
    )
}