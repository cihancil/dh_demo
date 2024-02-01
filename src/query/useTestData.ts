import { useQuery } from 'react-query'
import { TestType } from '../types/TestType'
import { fetchTestData } from '../api/fetchTestData'

export default function useTestData() {
  return useQuery<TestType>(['test'], async () => await fetchTestData())
}
