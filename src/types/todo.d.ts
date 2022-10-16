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