import { Term } from "../../../models/term";
import { TermRepo } from "../../../repository/departmental_usersRepository/principal/termRepo";

export const createTerm = async (term:Term): Promise <{message:string}> =>{
    try{
        await TermRepo.saveTerm(term);

        return {message: 'New Term created!'};
    }catch (err){
        throw new Error('Error creating Term: ' + (err as Error).message);
    }
};

export const updatedTermByUser = async (term:Term): Promise<{message:string}> => {
    try{
        await TermRepo.updateTerm(term);
        return {message: 'Term updated!'};
    }catch (err){
        throw new Error('Error Updating Term: '+ (err as Error).message);
    }
}

export const deleteTermbyUser = async (term: Term): Promise<{message:string}> => {

    try{
        await TermRepo.deleteTerm(term);

        return {message: 'Term deleted successfully!'}
    }catch(err){
        throw new Error('Error deleting term: '+ (err as Error).message);
    }
}
export const selectAllTerm = async (): Promise<{message:string}> => {
    try{
        const term =await TermRepo.selectAllTerm();
        return term;
    }catch(err){
        throw new Error('Error fetching all term: ' + (err as Error).message);
    }
}