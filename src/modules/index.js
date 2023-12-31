import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from '@/modules/loading';

import user, { userSaga } from '@/modules/user';

import form from '@/modules/form';
import posts, { postsSaga } from '@/modules/board/list';
import postWrite, { postWriteSaga } from '@/modules/board/write';
import post, { postSaga } from '@/modules/board/view';
import postModify, { postModifySaga } from '@/modules/board/modify';

import recipes, { recipesSaga } from '@/modules/recipe/list';
import recipesWrite, { recipesWriteSaga } from '@/modules/recipe/write';
import recipesView, { recipesViewSaga } from '@/modules/recipe/view';
import recipesModify, { recipesModifySaga } from '@/modules/recipe/modify';

import meal, { mealSaga } from '@/modules/meal';
import week, { weekSaga } from '@/modules/week';
import popular, { popularSaga } from '@/modules/popular';
import hero, { heroSaga } from '@/modules/hero';
import parallax, { parallaxSaga } from '@/modules/parallax';
import stew, { stewSaga } from '@/modules/stew';
import noodle, { noodleSaga } from '@/modules/noodle';
import curry, { currySaga } from '@/modules/curry';
import steak, { steakSaga } from '@/modules/steak';
import soup, { soupSaga } from '@/modules/soup';
import salad, { saladSaga } from '@/modules/salad';
import baking, { bakingSaga } from '@/modules/baking';
import burger, { burgerSaga } from '@/modules/burger';
import pizza, { pizzaSaga } from '@/modules/pizza';
import cake, { cakeSaga } from '@/modules/cake';
import dessert, { dessertSaga } from '@/modules/dessert';
import drink, { drinkSaga } from '@/modules/drink';

import follow, { followSaga } from '@/modules/follow';
import comment, { commentSaga } from '@/modules/comment';

// combineReducers를 사용해서 병합합니다.
const rootReducer = combineReducers({ loading, form, user, meal, week, popular, parallax, hero, stew, noodle, curry, steak, soup, salad, baking, burger, pizza, cake, dessert, drink, posts, postWrite, post, postModify, recipes, recipesWrite, recipesView, recipesModify, follow, comment });

export function* rootSaga() {
  // yield는 비동기 작업을 처리할 때 작업 단위를 나누는 기준점 같은 것으로 보면 됩니다.
  // all 은 여러 개의 Saga를 동시에 실행시켜줍니다.
  yield all([userSaga(), mealSaga(), weekSaga(), heroSaga(), popularSaga(), parallaxSaga(), stewSaga(), noodleSaga(), currySaga(), steakSaga(), soupSaga(), saladSaga(), bakingSaga(), burgerSaga(), pizzaSaga(), cakeSaga(), drinkSaga(), dessertSaga(), postsSaga(), postWriteSaga(), postSaga(), postModifySaga(), recipesSaga(), recipesWriteSaga(), recipesViewSaga(), recipesModifySaga(), followSaga(), commentSaga()]);
}

export default rootReducer;
