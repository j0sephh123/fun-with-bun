export type NullableString = string | null;
export type Id = number;
export type Meta = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};

export type Avatar = {
  data: {
    id: Id;
    attributes: {
      url: string;
    };
  };
};

export type Project = {
  id: Id;
  attributes: {
    name: string;
    description: NullableString;
    url: NullableString;
    createdAt: Date;
    updatedAt: Date;
    avatar: Avatar | null;
  };
};

export type ProjectsResponse = {
  data: Project[];
  meta: Meta;
};

export type Upload = {
  id: number;
  url: string;
  name: string;
}
export type UploadsResponse = Upload[];