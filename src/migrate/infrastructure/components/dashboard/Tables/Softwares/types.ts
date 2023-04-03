export interface DataRow {
  name: string,
  manufacturers: { name: string };
  operatingsystems: { name: string }
  softwares: {
    name: string,
    manufacturers: { name: string },
    versions: { name: string },
    licenses: { name: string }
  }
}
