export interface RetrospectCardProps {
    date: string;
    percentage: number;
    todoCount: number;
    didCount: number;
    text: string;
}

export interface Item {
  importance: number,
  context: string,
  id: number
}

export interface GoalDate {
  startDate : string,
  endDate : string,
  ddayCnt : number
}

export interface Percent {
  percent : number
}

export interface GoalListItem {
  importance: number,
  context: string,
  isComplete : boolean
}

export const lst: GoalListItem[] = [
  {
    importance: 0,
    context: 'Loeam Ipsum',
    isComplete:false
  },
  {
    importance: 1,
    context: 'Loeam Ipsum',
    isComplete:false
  },
  {
    importance: 2,
    context: 'Loeam Ipsum',
    isComplete:true
  },
  {
    importance: 3,
    context: 'Loeam Ipsum',
    isComplete:false
  },
  {
    importance: 3,
    context: 'Loeam Ipsum',
    isComplete:true
  },
  {
    importance: 3,
    context: 'Loeam Ipsum',
    isComplete:false
  },
  {
    importance: 3,
    context: 'Loeam Ipsum',
    isComplete:true
  },
  {
    importance: 3,
    context: 'Loeam Ipsum',
    isComplete:true
  },
  {
    importance: 3,
    context: 'Loeam Ipsum',
    isComplete:true
  },
];
