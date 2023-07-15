import moment from 'moment'
import * as yup from 'yup'

function createValidationSchema() {
    const schema = yup.object().shape({
        password: yup.string().test('required', 'Insira uma data válida', value => {
            const splidDate = value?.split('/')!;
            const dateFormat = `${splidDate[2]}-${splidDate[1]}-${splidDate[0]}`
            const date = moment(dateFormat);

            const dateIsValid = date.isValid();

            return dateIsValid
        }).required()
    });

    return schema;
}

const questions = [
    {
        title: 'O que fizemos no nosso primeiro date?',
        correctAnswer: 'Fomos ver o pôr do sol',
        answers: ['Ida ao Mané para tomar uma cervejinha', 'Fomos ver o pôr do sol', 'Tomamos sorvete de viado (Bacio di Latte)']
    },
    {
        title: 'Qual sonho da sua lista de lugares que realizamos juntas?',
        correctAnswer: 'Ida ao Maracanã',
        answers: ['Ida a Lapa', 'Ida ao Maracanã', 'Ida ao Cristo Redentor'],
    },
    {
        title: 'O que mais amamos fazer juntas?',
        correctAnswer: 'Beber uma cervejinha',
        answers: ['Beber uma cervejinha', 'Ir ao cinema', 'Assistir filme']
    }
];

const show = {
    opacity: 1,
    display: "block"
};

const hide = {
    opacity: 0,
    transitionEnd: {
        display: "none",
    }
};

export {
    createValidationSchema,
    questions,
    show,
    hide
}