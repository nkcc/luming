export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface CarouselData {
    title: string;
    name: string,
    subTitle: string;
    description: string;
    imgLink: string;
 }

 export interface OfferData {
    title: string;
    name: string,
    list: {title: string, imgLink: string, description: string, link?: string}[];
 }


 export interface CaseData {
   name: string,
   rank: string,
   caseName: string,
   student: string,
   info: {
     label: string,
     value: string,
   }[],
   imgLink: string,
   caseStudy: string[],
 }

 export interface PlanData {
   title: string,
   type: string,
   data: CaseData[],
 }
