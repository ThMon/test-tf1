export interface ProgramQuery {
  id: string;
  image_id: string;
  name: string;
  thumnail: {
    id: string;
    updated_at: string;
    url?: string;
    alt: string;
    __typename: string;
  };
  __typename: string;
}
