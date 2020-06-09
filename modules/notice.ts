const NTCID = 'notice/NTCID' as const

export const getNtc = (ntcId: any) => ({
    type: NTCID,
    ntcId
});

type NtcAction = ReturnType<typeof getNtc>

type IdState = {
    ntcId: number
}

const idInitialState = {
    ntcId : 0,
}

export default function reducer(state: IdState = idInitialState, action: NtcAction) {
    switch (action.type) {
        case NTCID:
            return {
                ...state,
                ntcId: action.ntcId
            }
        default:
            return state
    }
}

