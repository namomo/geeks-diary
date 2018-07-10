import { NoteCollectionActions, NoteCollectionActionTypes } from './note-collection.actions';
import { createNoteCollectionInitialState, NoteCollectionFilterBy, NoteCollectionState } from './note-collection.state';


export function noteCollectionReducer(
    state: NoteCollectionState = createNoteCollectionInitialState(),
    action: NoteCollectionActions,
): NoteCollectionState {

    switch (action.type) {
        case NoteCollectionActionTypes.LOAD_COLLECTION:
            return {
                ...state,
                loading: true,
            };

        case NoteCollectionActionTypes.LOAD_COLLECTION_COMPLETE:
            return {
                ...state,
                loading: false,
                loaded: true,
                notes: [...action.payload.notes],
            };

        case NoteCollectionActionTypes.SELECT_DATE_FILTER:
            return {
                ...state,
                filterBy: NoteCollectionFilterBy.BY_DATE,
                selectedDate: {
                    year: action.payload.date.getFullYear(),
                    month: action.payload.date.getMonth(),
                    date: action.payload.date.getDate(),
                },
            };

        case NoteCollectionActionTypes.SELECT_MONTH_FILTER:
            return {
                ...state,
                filterBy: NoteCollectionFilterBy.BY_MONTH,
                selectedMonth: {
                    year: action.payload.date.getFullYear(),
                    month: action.payload.date.getMonth(),
                },
                selectedDate: null,
            };

        case NoteCollectionActionTypes.CHANGE_SORT_ORDER:
            return {
                ...state,
                sortBy: action.payload.sortBy,
            };

        case NoteCollectionActionTypes.CHANGE_SORT_DIRECTION:
            return {
                ...state,
                sortDirection: action.payload.sortDirection,
            };

        default:
            return state;
    }
}
