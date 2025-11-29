// // Simple test to check Supabase connection
// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://hmuwvlnryjzlqtjthylk.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtdXd2bG5yeWp6bHF0anRoeWxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4ODU4MTMsImV4cCI6MjA3OTQ2MTgxM30.tx4LeiAHo2RVefmv-lxkEgBDZBBSQfiPrbBZzgSULfE'

// const supabase = createClient(supabaseUrl, supabaseKey)

// async function testConnection() {
//   console.log('Testing Supabase connection...')

//   try {
//     const { data, error } = await supabase
//       .from('patterns')
//       .select('id, name, description, status, solved_count, total_problems')
//       .limit(1)

//     if (error) {
//       console.error('❌ Error:', error)
//     } else {
//       console.log('✅ Success:', data)
//     }
//   } catch (err) {
//     console.error('❌ Exception:', err)
//   }
// }

// testConnection()
