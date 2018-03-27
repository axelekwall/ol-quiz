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
            name: "(Non?) Feminist Quiz",
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
                text: "Which of the following do you think is the main reason for women’s inequality?",
                alternatives: [  {text: "Women’s own choices", score: 2},
                        {text: "Discrimination against women", score: 3}, 
                        {text: "Women", score: 1},
                        {text: "Society’s view on equality of women and men", score: 4}],
                answerText: "...",
            }
        },
        {
            id: "quest2",
            data: {
                text: "What is your opinion about stay-at home dads?",
                alternatives: [
                    {text: "What about them?", score: 4}, 
                    {text: "They are very sweet and adorable", score: 2}, 
                    {text: "It is just weird and not normal", score: 1},
                    {text: "It is very positive that they are accepted in society nowadays", score: 3}],
                answerText: "..."
            }
        },
        {
            id: "quest3",
            data: {
                text: "You are in a group and someone makes a sexist joke, what do you do?",
                alternatives: [
                    {text: "Nothing, I don’t want them to see me as boring.", score: 1},
                    {text: "I laugh even if I don’t see the fun in it.", score: 1},
                    {text: "I try to take a stand and say something like; That’s not okay.", score: 4},
                    {text: "I don’t see a problem with the friend making that joke. It’s just a joke.", score: 1}
                ],
                answerText: "..."
            },
        },
        {
            id: "quest4",
            data: {
                text: "You walk into public transportation and you see a mother breastfeeding her child. What is your reaction?",
                alternatives: [
                    {text: "This should not be allowed in public. It is provocative.", score: 2}, 
                    {text: "Ohhh! What a cute baby!!", score: 4},
                    {text: "You ask her to cover her nakedness.", score: 1},
                    {text: "You go sit beside her and start talking to her.", score: 3}
                ],
                answerText: "..."
            },
        },
        {
            id: "quest5",
            data: {
                text: "In 2017, the swedish male handball team decreased their salary so that the female and male team could have equal pay. What are your thoughts about this?",
                alternatives: [
                    {text: "Great job by the guys! Equal work should result in equal pay!", score: 3},
                    {text: "This should be done in every sport, women deserve the same salary as men.", score: 4},
                    {text: "Who watches women’s handball?", score: 1},
                    {text: "Who cares?", score: 2}
                ],
                answerText: "..."
            }
        },
        {
            id: "quest6",
            data: {
                text: "A young couple is driving a car. Who do you imagine in the driver seat?",
                alternatives: [
                    {text: "The woman", score: 2},
                    {text: "The man", score: 1},
                    {text: "Anyone who is allowed to drive", score: 3},
                    {text: "The better driver", score: 4}
                ],
                answerText: "..."
            }
        },
        {
            id: "quest7",
            data: {
                text: "Do you find it strange that women and men are not paid equally?",
                alternatives: [
                    {text: "No, they should choose better jobs if they want a higher salary.", score: 2},
                    {text: "Yes, if they do the same job.", score: 3},
                    {text: "Women should stay are home and take care of the children.", score: 1},
                    {text: "Yes, it is an example of how society values women less than men.", score: 4}
                ],
                answerText: "..."
            }
        },
        {
            id: "quest8",
            data: {
                text: "Do you think that it is a problem that less women than men choose to become engineers?",
                alternatives: [
                    {text: "No, men are more interested in technology and women are more interested in soft things. It’s natural.", score: 2},
                    {text: "Yes, more women engineers would help bring new perspectives into the industry.", score: 3},
                    {text: "Yes. There are no reasons why more women shouldn’t feel like they can become engineers. Interests and competence aren’t gender specific things.", score: 4},
                    {text: "No, generally women does not have what it takes and should do what they are good at.", score: 1}
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
