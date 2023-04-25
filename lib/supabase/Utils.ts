import { supabase } from "./supabaseClient"
import { cache } from "react"

// get all records in a table in database 
export const getAllRecords = async (
  tableName: string, 
  sortBy: string = 'created_at', 
  isAsce: boolean = false,
) => {

  const { data, error } = await supabase
    .from(tableName)
    .select()
    .order(sortBy, { ascending: isAsce })
  
  if (error) {
    console.log(error)
  }
  // console.log("🔥🔥🔥 fetched data", data);
  return { data, error }
};

// insert a record in a table in database
export const insertRecord = async (
  tableName: string, 
  record: any,
) => {

  const { data, error } = await supabase
  .from(tableName)
  .insert(record)
  .select()
  
  if (error) {
    console.log(error)
  }
  // console.log("🐶🐶🐶 inserted data", data);
  return { data, error }
}
