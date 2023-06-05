import {createClient} from "@supabase/supabase-js";

export const supabase=createClient(
    "https://mnwowcgojvkmwzrkvgjs.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ud293Y2dvanZrbXd6cmt2Z2pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU5ODgwNjUsImV4cCI6MjAwMTU2NDA2NX0.O6Feg-Yl4C12E3DWsbdc5J3DApqQFlZ-ajiV9tFyXF8"
    )