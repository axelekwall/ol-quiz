import { combineReducers } from "redux";
import { FETCH_QUIZ_REQUEST,FETCH_QUIZ_SUCCESS,NEXT_QUESTION,UI,FINISH_QUIZ,START_QUIZ,SET_UI_VIEW
    } from '../actions';

// ------------------------------------------------------------------------------------------------
// ******************************** QUIZ-FRÅGOR JÄMSTÄLLDHETSVECKAN *******************************
// ------------------------------------------------------------------------------------------------


//ALL PARTS OF STATE LISTEN TO THE CONSTANTS SET BELOW
//MEANING ON CHANGE IT WILL UPDATE
let hardState = {

    quiz: {
            name: "Feminist Quiz",
            desc: `Welcome to this supercalifragilisticexpialidocious quiz made by Jämställdhetsveckan in 
            collaboration with Osqledaren! Answer some quick questions and find out which feminist 
            (or non-feminist) profile you are most similar to.But beware, we do not guarantee your 
            satisfaction with the result...`,
            numberOfQuestions: 8,
            isFetchingQuiz: false
    },
    currentView: "UI_SHOW_FRONT",
    currentQuestion: 0,
    questions:  [
        {
            id: "quest1",
            data: {
                text: "Which of the following do you think is the biggest factor keeping women from achieving full equality with men?",
                alternatives: [  {text: "Their own choices", score: 1},
                        {text: "Discrimination against women", score: 2}, 
                        {text: "Being a woman", score: 0},
                        {text: "Society’s view on equality of women and men", score: 3}],
                answerText: "...",
            }
        },
        {
            id: "quest2",
            data: {
                text: "What do you think about stay-at home dads?",
                alternatives: [
                    {text: "What about them?", score: 3}, 
                    {text: "They are very sweet and adorable", score: 1}, 
                    {text: "It is just weird and not normal", score: 0},
                    {text: "It is very positive that they are accepted in society", score: 2}],
                answerText: "..."
            }
        },
        {
            id: "quest3",
            data: {
                text: "You are in a group and someone makes a sexist joke, what do you do?",
                alternatives: [
                    {text: "Nothing, I don’t want them to see me as boring.", score: 1},
                    {text: "I laugh even if I don’t see the fun in it.", score: 0},
                    {text: "I try to take a stand and say something like; That’s not okay.", score: 3},
                    {text: "I don’t see a problem with the friend making that joke. It’s just a joke.", score: 2}
                ],
                answerText: "..."
            },
        },
        {
            id: "quest4",
            data: {
                text: "You walk into public transportation and you see a mother breastfeeding her child. What do you do/think?",
                alternatives: [
                    {text: "This should not be allowed in public. It is provocative.", score: 1}, 
                    {text: "Ohhh! What a cute baby!!", score: 3},
                    {text: "You ask her to cover her nakedness.", score: 0},
                    {text: "You go sit beside her and start talking to her.", score: 2}
                ],
                answerText: "..."
            },
        },
        {
            id: "quest5",
            data: {
                text: "The swedish male handball team decreased salary so that the female team could get equal pay. What is your first reaction?",
                alternatives: [
                    {text: "They are heroes", score: 2},
                    {text: "That is just right, why should the women get less?", score: 3},
                    {text: "Who watches women’s handball?", score: 0},
                    {text: "Who cares?", score: 1}
                ],
                answerText: "...",
                img: "..."
            }
        },
        {
            id: "quest6",
            data: {
                text: "A young couple is driving in the car. Who do you imagine in the driver seat?",
                alternatives: [
                    {text: "The woman", score: 1},
                    {text: "The man", score: 0},
                    {text: "Anyone who is allowed to drive", score: 2},
                    {text: "The better driver", score: 3}
                ],
                answerText: "..."
            }
        },
        {
            id: "quest7",
            data: {
                text: "Do you find it weird that women and men are not paid equally?",
                alternatives: [
                    {text: "No, they should choose better jobs if they want a higher salary.", score: 1},
                    {text: "Yes, if they do the same job.", score: 2},
                    {text: "Women should stay are home and take care of the children.", score: 0},
                    {text: "Yes, it is an example of how society values women less than men.", score: 3}
                ],
                answerText: "..."
            }
        },
        {
            id: "quest8",
            data: {
                text: "Do you think that it is a problem that less women than men choose to become engineers?",
                alternatives: [
                    {text: "No, men are more interested in technology and women are more interested in soft things. It’s natural.", score: 1},
                    {text: "Yes, more women engineers would help bring new perspectives into the industry.", score: 2},
                    {text: "Yes, it is an important step in showing that women are just as competent as men and should be able to take leading positions without anyone questioning it.", score: 3},
                    {text: "No, generally women does not have what it takes and should do what they are good at.", score: 0}
                ],
                answerText: "..."
            }
        }
    ],
    userScore: 0
}


const quiz = (state = hardState.quiz, action) => {
    switch(action.type){
        case FETCH_QUIZ_SUCCESS: {
            return {
                name: action.quiz.name,
                desc: action.quiz.desc,
                numberOfQuestions: action.quiz.numberOfQuestions,
                id: action.quiz.id,
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
        case NEXT_QUESTION:
            return state+1;
        default:
            return state; 
    }
};


// Denna gör inget tror jag


//-- currentView variable in state switches here -- 
//this is the variable controlling what view is displayed
//several actions can trigger a change here 
const currentView = (state = UI.FRONT, action) => {
    switch(action.type){
        case SET_UI_VIEW:
            return action.view;
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


const userScore = (state = 0, action) => {
    switch(action.type){
        case NEXT_QUESTION:
            return state+action.score;
        default:
            return state;
    }
}

const quizApp = combineReducers({
    quiz,
    currentView,
    currentQuestion,
    questions,
    userScore
});

export default quizApp;
