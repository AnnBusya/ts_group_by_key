type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((result, item) => {
    const keyValue = item[key] as string;

    const newResult = { ...result };

    if (!newResult[keyValue]) {
      newResult[keyValue] = [];
    }

    newResult[keyValue].push(item);

    return newResult;
  }, {} as GroupsMap<T>);
}
