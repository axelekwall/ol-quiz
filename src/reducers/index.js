import { combineReducers } from "redux";
import { FETCH_QUIZ_REQUEST,FETCH_QUIZ_SUCCESS,NEXT_QUESTION,UI,FINISH_QUIZ,START_QUIZ,CORRECT_ANSWER,INCORRECT_ANSWER,SET_UI_VIEW
    } from '../actions';


//ALL PARTS OF STATE LISTEN TO THE CONSTANTS SET BELOW
//MEANING ON CHANGE IT WILL UPDATE

let hardState = {

    quiz: {
            name: "Studenträtt",
            desc: "Hur bra koll har du på vad du som student får och inte får göra? Och hur bra koll har du på vad du måste göra?",
            numberOfQuestions: 6,
            isFetchingQuiz: true
    },
    currentView: "UI_SHOW_FRONT",
    currentQuestion: 0,
    questions:  [
        {
            id: "quest1",
            data: {
                text: "Vilken av följande instanser ska du i första hand prata med om du är sjuk en längre tid",
                alternatives: [  {text: "CSN", isCorrect: false},
                        {text: "THS", isCorrect: false}, 
                        {text: "Försäkringskassan", isCorrect: true}],
                answerText: "Ett läkarintyg och ett prat med försäkringskassan ska räcka, sen löser sig resten (med CSN till exempel) i ett parallellt myndighetsuniversum. Vid förändrad studieplan kan även studievägledaren vara en bra person att hålla kontakten med också.",
                correctStat: 50,
                correctIndex: 2
            }
        },
        {
            id: "quest2",
            data: {
                text: "Var ska du vända dig i första hand om du blir orättvist behandlad av en lärare?",
                alternatives: [
                    {text: "Din sektion", isCorrect: true}, 
                    {text: "THS", isCorrect: false}, 
                    {text: "Rektorn", isCorrect: false},
                    {text: "Osqledaren", isCorrect: false}],
                answerText: "I första hand är det sektionen som ska hjälpa till. Om sektionen inte lyckas påverka tar de det vidare till THS som med ännu större muskler kan hjälpa till. Osqledaren kan egentligen inte ta möten med någon lärare eller studierektor, men vi skriver gärna om det ni varit med om!",
                correctStat: 0,
                correctIndex: 0
            }
        },
        {
            id: "quest3",
            data: {
                text: "Du läser en introduktionskurs i programmering. Läraren har tipsat om att det går att hitta mycket svar online, men ger inte mycket mer information än så. Du och dina kamrater lånar friskt kod från Stackoverflow. När slutprojektet skickas meddelar läraren att din projekt anses plagierat. Borde du som student bli anmäld för det här?",
                alternatives: [
                    {text: "Ja", isCorrect: false},
                    {text: "Nej", isCorrect: true}
                ],
                answerText: "För att en anmälan ska göras måste det gå att stödja att studenten har försökt vilseleda. Om en student till exempel är ny eller inte tydligt har delgivits information kring hur rutinerna ser ut kan det vara svårt för läraren att styrka att försök till plagiering. Har du fått tydlig information kring källhänvisning i rapportskrivning gäller det alltså nödvändigtvis inte i labbrapporter eller programmeringsuppgifter. Om du och dina studenter har samma kod kan det blir ett problem att ni kopierat från varandra, men vill du vara på den säkra sidan med hur rutinerna ser ut kring t.ex. kod eller källhänvisningar är det bäst att kolla med din lärare.",
                correctStat: 1,
                correctIndex: 1
            },
        },
        {
            id: "quest4",
            data: {
                text: "Vem godkänner ett studieuppehåll? ",
                alternatives: [
                    {text: "Rektorn", isCorrect: false}, 
                    {text: "Grundutbildnings- eller programansvarig", isCorrect: true},
                    {text: "Studievägledaren", isCorrect: false},
                    {text: "Jag själv", isCorrect: false}
                ],
                answerText: "Text kommer...",
                correctStat: 1,
                correctIndex: 1
            },
        },
        {
            id: "quest5",
            data: {
                text: "Vad betyder följande symbol på ditt mecenatkort?",
                alternatives: [
                    {text: "Rabatt på kårbokhandeln", isCorrect: false},
                    {text: "Tillträde till bibliotek anslutna till Allmänna Svenska Biblioteksförbundet", isCorrect: false},
                    {text: "Rättighet till att köpa studentbiljett i kollektivtrafiken", isCorrect: true}
                ],
                answerText: "  Symbolen står för Studentresekonceptet, som innebär att du har rätt till reserabatt i kollektivtrafiken. Det är ett koncept framtaget av Svensk Kollektivtrafik och symbolen är resultatet av en designtävling av en logotyp som hölls i samband med att idén utvecklades. Anslutna till Studentresekonceptet är Blekingetrafiken, Dalatrafik, Hallandstrafiken,, Jönköpings länstrafik, Kalmar länstrafik, Länstrafiken Kronoberg, Skånetrafiken, Västtrafik, X-trafik, Öresundståget och Östgötatrafiken. Ett krav för att utnyttja rabatten är att studera minst på en takt av 50% och 10 veckor per termin. Läs mer på http://www.svenskkollektivtrafik.se/ ",
                correctStat: 2,
                correctIndex: 2,
                img: "./static/studentresesymbolen.jpg"
            }
        },
        {
            id: "quest6",
            data: {
                text: "När är du INTE försäkrad via den automatiska studentförsäkringen?",
                alternatives: [
                    {text: "Till och från skolan", isCorrect: false},
                    {text: "I KTHs lokaler", isCorrect: false},
                    {text: "Under mottagning", isCorrect: true},
                    {text: "På exjobbet", isCorrect: false}
                ],
                answerText: "Som student är du automatiskt försäkrad med en personskadeförsäkring som gäller vid alla tillfällen då du deltar i aktiviteter relaterade till dina studier. Den gäller alltså även då du är ute på studiebesök eller på ditt examensarbete samt under resor som är kopplade till dessa. MEN, försäkringen gäller tyvärr inte under mottagningsveckorna. Då kan du behöva teckna en egen försäkring för att vara på det säkra om olyckan är framme. https://www.kth.se/student/studentliv/studentratt/forsakring-1.323886",
                correctStat: 2,
                correctIndex: 2
            }
        }
    ],
    selectedAnswer: false,
    correctAnswers: 0
}


const quiz = (state = hardState.quiz, action) => {
    switch(action.type){
        case FETCH_QUIZ_SUCCESS: {
            return {
                name: action.quiz.name,
                desc: action.quiz.desc,
                numberOfQuestions: action.quiz.numberOfQuestions,
                isFetchingQuiz: false
            }
        }
        case FETCH_QUIZ_REQUEST: {
            return {...state,
                isFetchingQuiz: true
            }
        }
        default:
            return state;
    }
};


const questions = (state = hardState.questions, action) => {
    switch(action.type) {
        case FETCH_QUIZ_SUCCESS:{
            return action.quiz.questions;
        }
        default:
            return state;
    }
};

const currentQuestion = (state = 0, action) => {
    switch(action.type) {
        case NEXT_QUESTION: {
            return state + 1;
        }
        default:
            return state;
    }
    
};

//-- selectedAnswer is being set here --
//Happens when ACTION answerQuestion has been dispatched
//OBS! INCORRECT OR CORRECT doesn't affect what selectedAnswer becomes since answer is what user selects 
const selectedAnswer = (state = false, action) => {
    switch(action.type) {
        case INCORRECT_ANSWER:
            return action.correct;
        case CORRECT_ANSWER:
            return action.correct;
        default:
            return state;
    }
};

//-- currentView variable in state switches here -- 
//this is the variable controlling what view is displayed
//several actions can trigger a change here 
const currentView = (state = UI.FRONT, action) => {
    switch(action.type){
        case SET_UI_VIEW:
            return action.view;
        case INCORRECT_ANSWER:
            return UI.ANSWER;
        case CORRECT_ANSWER:
            return UI.ANSWER;
        case NEXT_QUESTION:
            return UI.QUESTION;
        case FINISH_QUIZ:
            return UI.SUMMARY;
        case START_QUIZ:
            return UI.QUESTION;
        default:
            return state;
    }
};

//-- Setting correct answer -- 
//Change happens after ACTION answerQuestion has been dispatched 
//From action CORRECT_ANSWER or INCORRECT_ANSWER is returned which affects what happens here
const correctAnswers = (state = 0, action) => {
    switch(action.type) {
        case CORRECT_ANSWER:
            console.log("rätt")
            return state + 1;
        default:
            return state;
    }
};

const quizApp = combineReducers({
    quiz,
    currentView,
    currentQuestion,
    questions,
    selectedAnswer,
    correctAnswers
});

export default quizApp;
