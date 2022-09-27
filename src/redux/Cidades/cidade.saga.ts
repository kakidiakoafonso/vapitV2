import { call, put, takeEvery, takeLatest,all } from 'redux-saga/effects'
import fetch from './cidade.fetch';
import { fetchCidadeSucess,fetchCidadeError} from './Cidade.action';
import { FETCH_CIDADES_SUCESS } from './cidade.types';


function* fetchUser():any 
{
    console.log("FetchCidades");
    
   try {
    //   const cidades = yield call(fetch);
      yield put(fetchCidadeSucess([1,2,3]));
   } catch (e:any) {
      yield put(fetchCidadeError(e.message));
   }
}


function* sucess() 
{
    console.log("RootSaga");
    yield takeEvery(FETCH_CIDADES_SUCESS, fetchUser);
}
export default function* mySaga() 
{
    yield all([sucess()])
}