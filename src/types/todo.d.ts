export interface TodoRequestBody {
    /** 카테고리 아이디 */
    categoryId: number
    /** 목표 아이디 */
    goalId: number
    /** TODO 텍스트 */
    text: string
    /** 중요도 (0, 1, 2) */
    importance: number
    /** **LocalDate** 마감 날짜 */
    endDate: string
}

export interface TodoList {
    // "id": 3,
    // "categoryId": null,
    // "categoryName": null,
    // "goalId": null,
    // "goalName": null,
    // "importance": 1,
    // "text": "단어 시험보기",
    // "startDate": "2022-10-15",
    // "endDate": "2022-10-16",
    // "isDone": false
    id: number 
    categoryId: number
    categoryName: string
    goalId: number
    goalName: string
    importance: number
    text: string
    startDate: string
    endDate: string
    isDone: boolean
}