export interface RetrospectType {
    id: number;
    periodType: 'WEEK' | 'MONTH' | 'YEAR';
    text: string;
    startDate: string;
    endDate: string;
    totalCnt: number;
    doneCnt: number;
    percent: number;
}

export type DateSelectType = 'week' | 'month' | 'year';