'use client'

export function Music() {
    return (
        <audio autoPlay loop>
            <source src="/images/music.mp3" type="audio/mpeg" />
            Seu navegador não suporta a tag de áudio.
        </audio>
    )
}