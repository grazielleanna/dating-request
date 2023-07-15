'use client'

import { useEffect, useState } from "react"
import Swal from "sweetalert2";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

import { questions } from "@/data/mocks";
import { PhotoMoment } from "./components/photo";

export default function ProgressPage() {
    const router = useRouter();

    const [indexQuestion, setIndexQuestion] = useState(0);
    const [showMoments, setShowMoments] = useState(false);
    const [result, setResult] = useState({
        loading: false,
        question: 0,
        finished: false
    });

    const questionActive = questions[indexQuestion];
    const questionQuantity = questions?.length;

    useEffect(() => {
        if (result.finished) {
            setTimeout(() => {
                router.push('/validated/request')
            }, 800);
        }
    }, [result.finished])

    function handleClickAnswer(answer: string) {
        setResult(prevState => ({ ...prevState, loading: true }));
        const newIndex = indexQuestion + 1;

        if (answer === questionActive.correctAnswer) {
            Swal.fire({
                icon: 'success',
                title: 'Aeeee, você acertou!',
                text: `A resposta correta é: ${questionActive.correctAnswer}`,
                timer: 3000,
                timerProgressBar: true,
                showConfirmButton: false
            });

            setTimeout(() => {

                setResult({ loading: false, question: result.question + 1, finished: newIndex === (questionQuantity - 1) });
            }, 8200);

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Ops, resposta errada!',
                text: `A resposta correta é: ${questionActive.correctAnswer}`,
                timer: 3000,
                timerProgressBar: true,
                showConfirmButton: false
            });

            setTimeout(() => {
                setResult(prevState => ({ ...prevState, loading: false, finished: newIndex === (questionQuantity - 1) }));
            }, 7900);
        }

        if (indexQuestion <= (questionQuantity - 1)) {
            setIndexQuestion(indexQuestion + 1);
        } else {
            setResult(prevState => ({ ...prevState, finished: true }));
        }

        setTimeout(() => {
            setShowMoments(true);
        }, 3200);
    }

    return (
        <div>
            {(!showMoments && !result.finished) && (
                <>
                    <span className="absolute top-3.5 left-4">Desafio {indexQuestion + 1}/{questionQuantity}</span>

                    <div className="my-8">
                        <h3 className="text-left font-semibold text-lg text-blue">{questionActive?.title}</h3>
                        <span className="text-left block text-sm" style={{ color: '#406E8E' }}>Clique para responder.</span>

                        <div className="mt-5">
                            {questionActive?.answers.map((answer, index) => (
                                <span
                                    className="py-1 px-1 block border border-blue mb-2 cursor-pointer text-blue hover:bg-blue hover:text-white transition duration-200 ease-in"
                                    onClick={() => handleClickAnswer(answer)}
                                    key={`answer-${index}`}
                                >
                                    {answer}
                                </span>
                            ))}
                        </div>
                    </div>
                </>
            )}


            <AnimatePresence
                initial={false}
                onExitComplete={() => null}
            >
                {showMoments && (
                    <PhotoMoment index={indexQuestion} showMoments={showMoments} closeMoments={() => setShowMoments(false)} />
                )}
            </AnimatePresence>

        </div>
    )
}