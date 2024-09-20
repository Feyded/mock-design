export type MovieTypes = {
    id: number;
    studio: string;
    genres: string[];
    hype: number;
    description: string;
    title: {
      link: string;
      text: string;
    };
    start_date: string;
    rating: string;
    isLiked: boolean;
    isThrowback: boolean;
  };