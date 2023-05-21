import { snmpCredentialsRepository } from "../../repositories/snmpCredentials.repository";

export const snmpcredentialsService = {
  getSnmpcredentialsSelect: () => {
    return snmpCredentialsRepository.getSnmpcredentialsSelect();
  },
};
