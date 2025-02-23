import db from '../../../util/database';
import { Term } from '../../../models/term';
export class TermRepo{


    static async saveTerm(term: Term): Promise<any> {
        const existingTerm = await TermRepo.findTermByName(term.term_name);

        if (existingTerm) {
            throw new Error(`Term with name "${term.term_name}" already exists.`);
        }
        return db('term')
            .insert({
                term_name: term.term_name,
                date_start: term.date_start,
                date_end: term.date_end,
                is_current: term.is_current,
                is_active: term.is_active,
                is_deleted: term.is_deleted,
                created_by: term.created_by
            })
    }

    static async updateTerm(term: Term): Promise<any> {
        return db('term')
            .where({ id: term.id })
            .update({
                term_name: term.term_name,
                date_start: term.date_start,
                date_end: term.date_end,
                is_current: term.is_current,
                is_active: term.is_active,
                is_deleted: term.is_deleted,
                updated_at: new Date(),
                updated_by: term.updated_by
            });
    }
    static async deleteTerm(term: Term): Promise<any> {
        return db('term')
            .where({ id: term.id })
            .update({
                is_deleted: 1,
                is_deleted_at: new Date(),
                is_deleted_by: term.is_deleted_by
            });
    }
    static async selectAllTerm(): Promise<any> {
        return db('term')
            .select('*')
            .where({
                is_active: 1,
                is_current: 1
            })
            .andWhere({ is_deleted: 0 });
    }

    static async findTermByName(term_name: string): Promise<Term | null> {
        const result = await db('term')
            .select('*')
            .where({ term_name })
            .first();

        return result ? result : null;
    }
}