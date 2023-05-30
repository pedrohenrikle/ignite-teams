import AsyncStorage from '@react-native-async-storage/async-storage'
import { groupsGetAll } from './groupsGetAll'
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storageConfig'

export async function groupRemoveByName(groupDeleted: string) {
  const storedGroups = await groupsGetAll()
  const filtredGroups = storedGroups.filter((group) => group !== groupDeleted)

  await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(filtredGroups))
  await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`)
}
