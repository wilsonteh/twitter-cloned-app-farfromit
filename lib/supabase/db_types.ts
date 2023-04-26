export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      test: {
        Row: {
          created_at: string
          id: string
          test_column: string | null
          text: string
        }
        Insert: {
          created_at?: string
          id?: string
          test_column?: string | null
          text: string
        }
        Update: {
          created_at?: string
          id?: string
          test_column?: string | null
          text?: string
        }
      }
      tweets: {
        Row: {
          author: string
          created_at: string
          id: string
          text: string
        }
        Insert: {
          author: string
          created_at?: string
          id?: string
          text: string
        }
        Update: {
          author?: string
          created_at?: string
          id?: string
          text?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
