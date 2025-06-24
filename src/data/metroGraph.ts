// Complete Delhi Metro Graph Data based on DMRC network
export const metroGraph: Record<string, Array<{ station: string; line: string }>> = {
  // Red Line (Line 1)
  "Shaheed Sthal (New Bus Adda)": [
    { station: "Hindon River", line: "Red" }
  ],
  "Hindon River": [
    { station: "Shaheed Sthal (New Bus Adda)", line: "Red" },
    { station: "Arthala", line: "Red" }
  ],
  "Arthala": [
    { station: "Hindon River", line: "Red" },
    { station: "Mohan Nagar", line: "Red" }
  ],
  "Mohan Nagar": [
    { station: "Arthala", line: "Red" },
    { station: "Shyam Park", line: "Red" }
  ],
  "Shyam Park": [
    { station: "Mohan Nagar", line: "Red" },
    { station: "Major Mohit Sharma Rajendra Nagar", line: "Red" }
  ],
  "Major Mohit Sharma Rajendra Nagar": [
    { station: "Shyam Park", line: "Red" },
    { station: "Raj Bagh", line: "Red" }
  ],
  "Raj Bagh": [
    { station: "Major Mohit Sharma Rajendra Nagar", line: "Red" },
    { station: "Shaheed Nagar", line: "Red" }
  ],
  "Shaheed Nagar": [
    { station: "Raj Bagh", line: "Red" },
    { station: "Dilshad Garden", line: "Red" }
  ],
  "Dilshad Garden": [
    { station: "Shaheed Nagar", line: "Red" },
    { station: "Jhilmil", line: "Red" }
  ],
  "Jhilmil": [
    { station: "Dilshad Garden", line: "Red" },
    { station: "Mansarovar Park", line: "Red" }
  ],
  "Mansarovar Park": [
    { station: "Jhilmil", line: "Red" },
    { station: "Shahdara", line: "Red" }
  ],
  "Shahdara": [
    { station: "Mansarovar Park", line: "Red" },
    { station: "Welcome", line: "Red" }
  ],
  "Welcome": [
    { station: "Shahdara", line: "Red" },
    { station: "Seelampur", line: "Red" }
  ],
  "Seelampur": [
    { station: "Welcome", line: "Red" },
    { station: "Shastri Park", line: "Red" }
  ],
  "Shastri Park": [
    { station: "Seelampur", line: "Red" },
    { station: "Kashmere Gate", line: "Red" }
  ],
  "Kashmere Gate": [
    { station: "Shastri Park", line: "Red" },
    { station: "Tis Hazari", line: "Red" },
    { station: "Chandni Chowk", line: "Yellow" },
    { station: "Civil Lines", line: "Violet" }
  ],
  "Tis Hazari": [
    { station: "Kashmere Gate", line: "Red" },
    { station: "Pulbangash", line: "Red" }
  ],
  "Pulbangash": [
    { station: "Tis Hazari", line: "Red" },
    { station: "Pratap Nagar", line: "Red" }
  ],
  "Pratap Nagar": [
    { station: "Pulbangash", line: "Red" },
    { station: "Shastri Nagar", line: "Red" }
  ],
  "Shastri Nagar": [
    { station: "Pratap Nagar", line: "Red" },
    { station: "Inderlok", line: "Red" }
  ],
  "Inderlok": [
    { station: "Shastri Nagar", line: "Red" },
    { station: "Kanhaiya Nagar", line: "Red" },
    { station: "Ashok Park Main", line: "Green" }
  ],
  "Kanhaiya Nagar": [
    { station: "Inderlok", line: "Red" },
    { station: "Keshav Puram", line: "Red" }
  ],
  "Keshav Puram": [
    { station: "Kanhaiya Nagar", line: "Red" },
    { station: "Netaji Subhash Place", line: "Red" }
  ],
  "Netaji Subhash Place": [
    { station: "Keshav Puram", line: "Red" },
    { station: "Kohat Enclave", line: "Red" },
    { station: "Shakurpur", line: "Pink" }
  ],
  "Kohat Enclave": [
    { station: "Netaji Subhash Place", line: "Red" },
    { station: "Pitam Pura", line: "Red" }
  ],
  "Pitam Pura": [
    { station: "Kohat Enclave", line: "Red" },
    { station: "Rohini East", line: "Red" }
  ],
  "Rohini East": [
    { station: "Pitam Pura", line: "Red" },
    { station: "Rohini West", line: "Red" }
  ],
  "Rohini West": [
    { station: "Rohini East", line: "Red" },
    { station: "Rithala", line: "Red" }
  ],
  "Rithala": [
    { station: "Rohini West", line: "Red" }
  ],

  // Blue Line (Line 3 & 4)
  "Dwarka Sector 21": [
    { station: "Dwarka Sector 8", line: "Blue" }
  ],
  "Dwarka Sector 8": [
    { station: "Dwarka Sector 21", line: "Blue" },
    { station: "Dwarka Sector 9", line: "Blue" }
  ],
  "Dwarka Sector 9": [
    { station: "Dwarka Sector 8", line: "Blue" },
    { station: "Dwarka Sector 10", line: "Blue" }
  ],
  "Dwarka Sector 10": [
    { station: "Dwarka Sector 9", line: "Blue" },
    { station: "Dwarka Sector 11", line: "Blue" }
  ],
  "Dwarka Sector 11": [
    { station: "Dwarka Sector 10", line: "Blue" },
    { station: "Dwarka Sector 12", line: "Blue" }
  ],
  "Dwarka Sector 12": [
    { station: "Dwarka Sector 11", line: "Blue" },
    { station: "Dwarka Sector 13", line: "Blue" }
  ],
  "Dwarka Sector 13": [
    { station: "Dwarka Sector 12", line: "Blue" },
    { station: "Dwarka Sector 14", line: "Blue" }
  ],
  "Dwarka Sector 14": [
    { station: "Dwarka Sector 13", line: "Blue" },
    { station: "Dwarka", line: "Blue" }
  ],
  "Dwarka": [
    { station: "Dwarka Sector 14", line: "Blue" },
    { station: "Dwarka Mor", line: "Blue" }
  ],
  "Dwarka Mor": [
    { station: "Dwarka", line: "Blue" },
    { station: "Nawada", line: "Blue" }
  ],
  "Nawada": [
    { station: "Dwarka Mor", line: "Blue" },
    { station: "Uttam Nagar West", line: "Blue" }
  ],
  "Uttam Nagar West": [
    { station: "Nawada", line: "Blue" },
    { station: "Uttam Nagar East", line: "Blue" }
  ],
  "Uttam Nagar East": [
    { station: "Uttam Nagar West", line: "Blue" },
    { station: "Janakpuri West", line: "Blue" }
  ],
  "Janakpuri West": [
    { station: "Uttam Nagar East", line: "Blue" },
    { station: "Janakpuri East", line: "Blue" }
  ],
  "Janakpuri East": [
    { station: "Janakpuri West", line: "Blue" },
    { station: "Tilak Nagar", line: "Blue" }
  ],
  "Tilak Nagar": [
    { station: "Janakpuri East", line: "Blue" },
    { station: "Subhash Nagar", line: "Blue" }
  ],
  "Subhash Nagar": [
    { station: "Tilak Nagar", line: "Blue" },
    { station: "Tagore Garden", line: "Blue" }
  ],
  "Tagore Garden": [
    { station: "Subhash Nagar", line: "Blue" },
    { station: "Rajouri Garden", line: "Blue" }
  ],
  "Rajouri Garden": [
    { station: "Tagore Garden", line: "Blue" },
    { station: "Ramesh Nagar", line: "Blue" },
    { station: "ESI-Basaidarapur", line: "Pink" }
  ],
  "Ramesh Nagar": [
    { station: "Rajouri Garden", line: "Blue" },
    { station: "Moti Nagar", line: "Blue" }
  ],
  "Moti Nagar": [
    { station: "Ramesh Nagar", line: "Blue" },
    { station: "Kirti Nagar", line: "Blue" }
  ],
  "Kirti Nagar": [
    { station: "Moti Nagar", line: "Blue" },
    { station: "Shadipur", line: "Blue" }
  ],
  "Shadipur": [
    { station: "Kirti Nagar", line: "Blue" },
    { station: "Patel Nagar", line: "Blue" }
  ],
  "Patel Nagar": [
    { station: "Shadipur", line: "Blue" },
    { station: "Rajendra Place", line: "Blue" }
  ],
  "Rajendra Place": [
    { station: "Patel Nagar", line: "Blue" },
    { station: "Karol Bagh", line: "Blue" }
  ],
  "Karol Bagh": [
    { station: "Rajendra Place", line: "Blue" },
    { station: "Jhandewalan", line: "Blue" }
  ],
  "Jhandewalan": [
    { station: "Karol Bagh", line: "Blue" },
    { station: "Ramakrishna Ashram Marg", line: "Blue" }
  ],
  "Ramakrishna Ashram Marg": [
    { station: "Jhandewalan", line: "Blue" },
    { station: "Rajiv Chowk", line: "Blue" }
  ],
  "Rajiv Chowk": [
    { station: "Ramakrishna Ashram Marg", line: "Blue" },
    { station: "Barakhamba Road", line: "Blue" },
    { station: "New Delhi", line: "Yellow" },
    { station: "Patel Chowk", line: "Yellow" }
  ],
  "Barakhamba Road": [
    { station: "Rajiv Chowk", line: "Blue" },
    { station: "Mandi House", line: "Blue" }
  ],
  "Mandi House": [
    { station: "Barakhamba Road", line: "Blue" },
    { station: "Supreme Court", line: "Blue" },
    { station: "ITO", line: "Violet" }
  ],
  "Supreme Court": [
    { station: "Mandi House", line: "Blue" },
    { station: "Indraprastha", line: "Blue" }
  ],
  "Indraprastha": [
    { station: "Supreme Court", line: "Blue" },
    { station: "Yamuna Bank", line: "Blue" }
  ],
  "Yamuna Bank": [
    { station: "Indraprastha", line: "Blue" },
    { station: "Akshardham", line: "Blue" }
  ],
  "Akshardham": [
    { station: "Yamuna Bank", line: "Blue" },
    { station: "Mayur Vihar-1", line: "Blue" }
  ],
  "Mayur Vihar-1": [
    { station: "Akshardham", line: "Blue" },
    { station: "Mayur Vihar Extension", line: "Blue" }
  ],
  "Mayur Vihar Extension": [
    { station: "Mayur Vihar-1", line: "Blue" },
    { station: "New Ashok Nagar", line: "Blue" }
  ],
  "New Ashok Nagar": [
    { station: "Mayur Vihar Extension", line: "Blue" },
    { station: "Noida Sector 15", line: "Blue" }
  ],
  "Noida Sector 15": [
    { station: "New Ashok Nagar", line: "Blue" },
    { station: "Noida Sector 16", line: "Blue" }
  ],
  "Noida Sector 16": [
    { station: "Noida Sector 15", line: "Blue" },
    { station: "Noida Sector 18", line: "Blue" }
  ],
  "Noida Sector 18": [
    { station: "Noida Sector 16", line: "Blue" },
    { station: "Botanical Garden", line: "Blue" }
  ],
  "Botanical Garden": [
    { station: "Noida Sector 18", line: "Blue" },
    { station: "Golf Course", line: "Blue" },
    { station: "Okhla Bird Sanctuary", line: "Magenta" }
  ],
  "Golf Course": [
    { station: "Botanical Garden", line: "Blue" },
    { station: "Noida City Centre", line: "Blue" }
  ],
  "Noida City Centre": [
    { station: "Golf Course", line: "Blue" },
    { station: "Noida Sector 34", line: "Blue" }
  ],
  "Noida Sector 34": [
    { station: "Noida City Centre", line: "Blue" },
    { station: "Noida Sector 52", line: "Blue" }
  ],
  "Noida Sector 52": [
    { station: "Noida Sector 34", line: "Blue" },
    { station: "Noida Sector 61", line: "Blue" }
  ],
  "Noida Sector 61": [
    { station: "Noida Sector 52", line: "Blue" },
    { station: "Noida Sector 59", line: "Blue" }
  ],
  "Noida Sector 59": [
    { station: "Noida Sector 61", line: "Blue" },
    { station: "Noida Sector 62", line: "Blue" }
  ],
  "Noida Sector 62": [
    { station: "Noida Sector 59", line: "Blue" },
    { station: "Noida Electronic City", line: "Blue" }
  ],
  "Noida Electronic City": [
    { station: "Noida Sector 62", line: "Blue" }
  ],

  // Yellow Line (Line 2)
  "Samaypur Badli": [
    { station: "Rohini Sector 18, 19", line: "Yellow" }
  ],
  "Rohini Sector 18, 19": [
    { station: "Samaypur Badli", line: "Yellow" },
    { station: "Haiderpur Badli Mor", line: "Yellow" }
  ],
  "Haiderpur Badli Mor": [
    { station: "Rohini Sector 18, 19", line: "Yellow" },
    { station: "Jahangirpuri", line: "Yellow" }
  ],
  "Jahangirpuri": [
    { station: "Haiderpur Badli Mor", line: "Yellow" },
    { station: "Adarsh Nagar", line: "Yellow" }
  ],
  "Adarsh Nagar": [
    { station: "Jahangirpuri", line: "Yellow" },
    { station: "Azadpur", line: "Yellow" }
  ],
  "Azadpur": [
    { station: "Adarsh Nagar", line: "Yellow" },
    { station: "Model Town", line: "Yellow" }
  ],
  "Model Town": [
    { station: "Azadpur", line: "Yellow" },
    { station: "GTB Nagar", line: "Yellow" }
  ],
  "GTB Nagar": [
    { station: "Model Town", line: "Yellow" },
    { station: "Vishwavidyalaya", line: "Yellow" }
  ],
  "Vishwavidyalaya": [
    { station: "GTB Nagar", line: "Yellow" },
    { station: "Vidhan Sabha", line: "Yellow" }
  ],
  "Vidhan Sabha": [
    { station: "Vishwavidyalaya", line: "Yellow" },
    { station: "Civil Lines", line: "Yellow" }
  ],
  "Civil Lines": [
    { station: "Vidhan Sabha", line: "Yellow" },
    { station: "Chandni Chowk", line: "Yellow" },
    { station: "Kashmere Gate", line: "Violet" }
  ],
  "Chandni Chowk": [
    { station: "Civil Lines", line: "Yellow" },
    { station: "Chawri Bazar", line: "Yellow" },
    { station: "Kashmere Gate", line: "Red" }
  ],
  "Chawri Bazar": [
    { station: "Chandni Chowk", line: "Yellow" },
    { station: "New Delhi", line: "Yellow" }
  ],
  "New Delhi": [
    { station: "Chawri Bazar", line: "Yellow" },
    { station: "Rajiv Chowk", line: "Yellow" }
  ],
  "Patel Chowk": [
    { station: "Rajiv Chowk", line: "Yellow" },
    { station: "Central Secretariat", line: "Yellow" }
  ],
  "Central Secretariat": [
    { station: "Patel Chowk", line: "Yellow" },
    { station: "Khan Market", line: "Violet" },
    { station: "Udyog Bhawan", line: "Yellow" }
  ],
  "Khan Market": [
    { station: "Central Secretariat", line: "Violet" },
    { station: "JLN Stadium", line: "Violet" }
  ],
  "JLN Stadium": [
    { station: "Khan Market", line: "Violet" },
    { station: "Jangpura", line: "Violet" }
  ],
  "Jangpura": [
    { station: "JLN Stadium", line: "Violet" },
    { station: "Lajpat Nagar", line: "Violet" }
  ],
  "Lajpat Nagar": [
    { station: "Jangpura", line: "Violet" },
    { station: "Moolchand", line: "Violet" }
  ],
  "Moolchand": [
    { station: "Lajpat Nagar", line: "Violet" },
    { station: "Kailash Colony", line: "Violet" }
  ],
  "Kailash Colony": [
    { station: "Moolchand", line: "Violet" },
    { station: "Nehru Place", line: "Violet" }
  ],
  "Nehru Place": [
    { station: "Kailash Colony", line: "Violet" },
    { station: "Kalkaji Mandir", line: "Violet" }
  ],
  "Kalkaji Mandir": [
    { station: "Nehru Place", line: "Violet" },
    { station: "Govind Puri", line: "Violet" },
    { station: "Nehru Enclave", line: "Magenta" }
  ],
  "Govind Puri": [
    { station: "Kalkaji Mandir", line: "Violet" },
    { station: "Harkesh Nagar Okhla", line: "Violet" }
  ],
  "Harkesh Nagar Okhla": [
    { station: "Govind Puri", line: "Violet" },
    { station: "Jasola Apollo", line: "Violet" }
  ],
  "Jasola Apollo": [
    { station: "Harkesh Nagar Okhla", line: "Violet" },
    { station: "Sarita Vihar", line: "Violet" }
  ],
  "Sarita Vihar": [
    { station: "Jasola Apollo", line: "Violet" },
    { station: "Mohan Estate", line: "Violet" }
  ],
  "Mohan Estate": [
    { station: "Sarita Vihar", line: "Violet" },
    { station: "Tughlakabad", line: "Violet" }
  ],
  "Tughlakabad": [
    { station: "Mohan Estate", line: "Violet" },
    { station: "Badarpur Border", line: "Violet" }
  ],
  "Badarpur Border": [
    { station: "Tughlakabad", line: "Violet" },
    { station: "Sarai", line: "Violet" }
  ],
  "Sarai": [
    { station: "Badarpur Border", line: "Violet" },
    { station: "NHPC Chowk", line: "Violet" }
  ],
  "NHPC Chowk": [
    { station: "Sarai", line: "Violet" },
    { station: "Mewla Maharajpur", line: "Violet" }
  ],
  "Mewla Maharajpur": [
    { station: "NHPC Chowk", line: "Violet" },
    { station: "Sector 28", line: "Violet" }
  ],
  "Sector 28": [
    { station: "Mewla Maharajpur", line: "Violet" },
    { station: "Badkal Mor", line: "Violet" }
  ],
  "Badkal Mor": [
    { station: "Sector 28", line: "Violet" },
    { station: "Old Faridabad", line: "Violet" }
  ],
  "Old Faridabad": [
    { station: "Badkal Mor", line: "Violet" },
    { station: "Neelam Chowk Ajronda", line: "Violet" }
  ],
  "Neelam Chowk Ajronda": [
    { station: "Old Faridabad", line: "Violet" },
    { station: "Bata Chowk", line: "Violet" }
  ],
  "Bata Chowk": [
    { station: "Neelam Chowk Ajronda", line: "Violet" },
    { station: "Escorts Mujesar", line: "Violet" }
  ],
  "Escorts Mujesar": [
    { station: "Bata Chowk", line: "Violet" },
    { station: "Sant Surdas (Sihi)", line: "Violet" }
  ],
  "Sant Surdas (Sihi)": [
    { station: "Escorts Mujesar", line: "Violet" },
    { station: "Raja Nahar Singh (Ballabhgarh)", line: "Violet" }
  ],
  "Raja Nahar Singh (Ballabhgarh)": [
    { station: "Sant Surdas (Sihi)", line: "Violet" }
  ],

  // Green Line (Line 5)
  "Madipur": [
    { station: "Shivaji Park", line: "Green" }
  ],
  "Shivaji Park": [
    { station: "Madipur", line: "Green" },
    { station: "Punjabi Bagh", line: "Green" }
  ],
  "Punjabi Bagh": [
    { station: "Shivaji Park", line: "Green" },
    { station: "Ashok Park Main", line: "Green" }
  ],
  "Ashok Park Main": [
    { station: "Punjabi Bagh", line: "Green" },
    { station: "Satguru Ram Singh Marg", line: "Green" },
    { station: "Inderlok", line: "Red" }
  ],
  "Satguru Ram Singh Marg": [
    { station: "Ashok Park Main", line: "Green" },
    { station: "Kirti Nagar", line: "Green" }
  ],

  // Violet Line (Line 6)
  "Escorts Mujesar": [
    { station: "Sant Surdas (Sihi)", line: "Violet" }
  ],
  "ITO": [
    { station: "Mandi House", line: "Violet" },
    { station: "Delhi Gate", line: "Violet" }
  ],
  "Delhi Gate": [
    { station: "ITO", line: "Violet" },
    { station: "Jama Masjid", line: "Violet" }
  ],
  "Jama Masjid": [
    { station: "Delhi Gate", line: "Violet" },
    { station: "Lal Qila", line: "Violet" }
  ],
  "Lal Qila": [
    { station: "Jama Masjid", line: "Violet" },
    { station: "Kashmere Gate", line: "Violet" }
  ],
  "Udyog Bhawan": [
    { station: "Central Secretariat", line: "Violet" },
    { station: "Race Course", line: "Violet" }
  ],
  "Race Course": [
    { station: "Udyog Bhawan", line: "Violet" },
    { station: "Jor Bagh", line: "Violet" }
  ],
  "Jor Bagh": [
    { station: "Race Course", line: "Violet" },
    { station: "Dilli Haat-INA", line: "Violet" }
  ],
  "Dilli Haat-INA": [
    { station: "Jor Bagh", line: "Violet" },
    { station: "AIIMS", line: "Violet" }
  ],
  "AIIMS": [
    { station: "Dilli Haat-INA", line: "Violet" },
    { station: "Green Park", line: "Violet" }
  ],
  "Green Park": [
    { station: "AIIMS", line: "Violet" },
    { station: "Hauz Khas", line: "Violet" }
  ],
  "Hauz Khas": [
    { station: "Green Park", line: "Violet" },
    { station: "Malviya Nagar", line: "Violet" }
  ],
  "Malviya Nagar": [
    { station: "Hauz Khas", line: "Violet" },
    { station: "Saket", line: "Violet" }
  ],
  "Saket": [
    { station: "Malviya Nagar", line: "Violet" },
    { station: "Qutab Minar", line: "Violet" }
  ],
  "Qutab Minar": [
    { station: "Saket", line: "Violet" },
    { station: "Chhatarpur", line: "Violet" }
  ],
  "Chhatarpur": [
    { station: "Qutab Minar", line: "Violet" },
    { station: "Sultanpur", line: "Violet" }
  ],
  "Sultanpur": [
    { station: "Chhatarpur", line: "Violet" },
    { station: "Ghitorni", line: "Violet" }
  ],
  "Ghitorni": [
    { station: "Sultanpur", line: "Violet" },
    { station: "Arjan Garh", line: "Violet" }
  ],
  "Arjan Garh": [
    { station: "Ghitorni", line: "Violet" },
    { station: "Guru Dronacharya", line: "Violet" }
  ],
  "Guru Dronacharya": [
    { station: "Arjan Garh", line: "Violet" },
    { station: "Sikandarpur", line: "Violet" }
  ],
  "Sikandarpur": [
    { station: "Guru Dronacharya", line: "Violet" },
    { station: "MG Road", line: "Violet" }
  ],
  "MG Road": [
    { station: "Sikandarpur", line: "Violet" },
    { station: "IFFCO Chowk", line: "Violet" }
  ],
  "IFFCO Chowk": [
    { station: "MG Road", line: "Violet" },
    { station: "Millennium City Centre Gurugram", line: "Violet" }
  ],
  "Millennium City Centre Gurugram": [
    { station: "IFFCO Chowk", line: "Violet" }
  ],
  "Nehru Enclave": [
    { station: "Kalkaji Mandir", line: "Violet" },
    { station: "Greater Kailash", line: "Violet" }
  ],
  "Greater Kailash": [
    { station: "Nehru Enclave", line: "Violet" },
    { station: "Chirag Delhi", line: "Violet" }
  ],
  "Chirag Delhi": [
    { station: "Greater Kailash", line: "Violet" },
    { station: "Panchsheel Park", line: "Violet" }
  ],
  "Panchsheel Park": [
    { station: "Chirag Delhi", line: "Violet" },
    { station: "Okhla NSIC", line: "Violet" }
  ],
  "Okhla NSIC": [
    { station: "Panchsheel Park", line: "Violet" },
    { station: "Sukhdev Vihar", line: "Violet" }
  ],
  "Sukhdev Vihar": [
    { station: "Okhla NSIC", line: "Violet" },
    { station: "Jamia Millia Islamia", line: "Violet" }
  ],
  "Jamia Millia Islamia": [
    { station: "Sukhdev Vihar", line: "Violet" },
    { station: "Okhla Vihar", line: "Violet" }
  ],
  "Okhla Vihar": [
    { station: "Jamia Millia Islamia", line: "Violet" },
    { station: "Jasola Vihar Shaheen Bagh", line: "Violet" }
  ],
  "Jasola Vihar Shaheen Bagh": [
    { station: "Okhla Vihar", line: "Violet" },
    { station: "Kalindi Kunj", line: "Violet" }
  ],
  "Kalindi Kunj": [
    { station: "Jasola Vihar Shaheen Bagh", line: "Violet" },
    { station: "Okhla Bird Sanctuary", line: "Violet" }
  ],
  "Okhla Bird Sanctuary": [
    { station: "Kalindi Kunj", line: "Violet" },
    { station: "Botanical Garden", line: "Magenta" }
  ],

  // Pink Line (Line 7)
  "Majlis Park": [
    { station: "Azadpur", line: "Pink" }
  ],
  "Shakurpur": [
    { station: "Netaji Subhash Place", line: "Pink" },
    { station: "Punjabi Bagh West", line: "Pink" }
  ],
  "Punjabi Bagh West": [
    { station: "Shakurpur", line: "Pink" },
    { station: "ESI-Basaidarapur", line: "Pink" }
  ],
  "ESI-Basaidarapur": [
    { station: "Punjabi Bagh West", line: "Pink" },
    { station: "Rajouri Garden", line: "Pink" }
  ],
  "Mayapuri": [
    { station: "Naraina Vihar", line: "Pink" },
    { station: "Shivaji Bridge", line: "Pink" }
  ],
  "Naraina Vihar": [
    { station: "Mayapuri", line: "Pink" },
    { station: "Delhi Cantt", line: "Pink" }
  ],
  "Delhi Cantt": [
    { station: "Naraina Vihar", line: "Pink" },
    { station: "Durgabai Deshmukh South Campus", line: "Pink" }
  ],
  "Durgabai Deshmukh South Campus": [
    { station: "Delhi Cantt", line: "Pink" },
    { station: "Sir M. Vishweshwaraiah Moti Bagh", line: "Pink" }
  ],
  "Sir M. Vishweshwaraiah Moti Bagh": [
    { station: "Durgabai Deshmukh South Campus", line: "Pink" },
    { station: "Bhikaji Cama Place", line: "Pink" }
  ],
  "Bhikaji Cama Place": [
    { station: "Sir M. Vishweshwaraiah Moti Bagh", line: "Pink" },
    { station: "Sarojini Nagar", line: "Pink" }
  ],
  "Sarojini Nagar": [
    { station: "Bhikaji Cama Place", line: "Pink" },
    { station: "Dilli Haat-INA", line: "Pink" }
  ],
  "South Extension": [
    { station: "Lajpat Nagar", line: "Pink" },
    { station: "Vinobapuri", line: "Pink" }
  ],
  "Vinobapuri": [
    { station: "South Extension", line: "Pink" },
    { station: "Ashram", line: "Pink" }
  ],
  "Ashram": [
    { station: "Vinobapuri", line: "Pink" },
    { station: "Sarai Kale Khan-Nizamuddin", line: "Pink" }
  ],
  "Sarai Kale Khan-Nizamuddin": [
    { station: "Ashram", line: "Pink" },
    { station: "Mayur Vihar-1", line: "Pink" }
  ],
  "Mayur Vihar Pocket-1": [
    { station: "Trilokpuri-Sanjay Lake", line: "Pink" },
    { station: "Shiv Vihar", line: "Pink" }
  ],
  "Trilokpuri-Sanjay Lake": [
    { station: "Mayur Vihar Pocket-1", line: "Pink" },
    { station: "East Vinod Nagar-Mayur Vihar-II", line: "Pink" }
  ],
  "East Vinod Nagar-Mayur Vihar-II": [
    { station: "Trilokpuri-Sanjay Lake", line: "Pink" },
    { station: "Mandawali-West Vinod Nagar", line: "Pink" }
  ],
  "Mandawali-West Vinod Nagar": [
    { station: "East Vinod Nagar-Mayur Vihar-II", line: "Pink" },
    { station: "IP Extension", line: "Pink" }
  ],
  "IP Extension": [
    { station: "Mandawali-West Vinod Nagar", line: "Pink" },
    { station: "Anand Vihar I.S.B.T.", line: "Pink" }
  ],
  "Anand Vihar I.S.B.T.": [
    { station: "IP Extension", line: "Pink" },
    { station: "Karkarduma", line: "Pink" }
  ],
  "Karkarduma": [
    { station: "Anand Vihar I.S.B.T.", line: "Pink" },
    { station: "Karkarduma Court", line: "Pink" }
  ],
  "Karkarduma Court": [
    { station: "Karkarduma", line: "Pink" },
    { station: "Krishna Nagar", line: "Pink" }
  ],
  "Krishna Nagar": [
    { station: "Karkarduma Court", line: "Pink" },
    { station: "East Azad Nagar", line: "Pink" }
  ],
  "East Azad Nagar": [
    { station: "Krishna Nagar", line: "Pink" },
    { station: "Welcome", line: "Pink" }
  ],
  "Jaffrabad": [
    { station: "Maujpur-Babarpur", line: "Pink" },
    { station: "Gokulpuri", line: "Pink" }
  ],
  "Maujpur-Babarpur": [
    { station: "Jaffrabad", line: "Pink" },
    { station: "Shiv Vihar", line: "Pink" }
  ],
  "Shiv Vihar": [
    { station: "Maujpur-Babarpur", line: "Pink" },
    { station: "Mayur Vihar Pocket-1", line: "Pink" }
  ],
  "Gokulpuri": [
    { station: "Jaffrabad", line: "Pink" },
    { station: "Johri Enclave", line: "Pink" }
  ],
  "Johri Enclave": [
    { station: "Gokulpuri", line: "Pink" },
    { station: "GTB Nagar", line: "Pink" }
  ],

  // Magenta Line (Line 8)
  "Janakpuri West": [
    { station: "Dabri Mor-Janakpuri South", line: "Magenta" },
    { station: "Uttam Nagar East", line: "Blue" }
  ],
  "Dabri Mor-Janakpuri South": [
    { station: "Janakpuri West", line: "Magenta" },
    { station: "Dashrathpuri", line: "Magenta" }
  ],
  "Dashrathpuri": [
    { station: "Dabri Mor-Janakpuri South", line: "Magenta" },
    { station: "Palam", line: "Magenta" }
  ],
  "Palam": [
    { station: "Dashrathpuri", line: "Magenta" },
    { station: "Sadar Bazaar Cantonment", line: "Magenta" }
  ],
  "Sadar Bazaar Cantonment": [
    { station: "Palam", line: "Magenta" },
    { station: "Terminal 1-IGI Airport", line: "Magenta" }
  ],
  "Terminal 1-IGI Airport": [
    { station: "Sadar Bazaar Cantonment", line: "Magenta" },
    { station: "Shankar Vihar", line: "Magenta" }
  ],
  "Shankar Vihar": [
    { station: "Terminal 1-IGI Airport", line: "Magenta" },
    { station: "Vasant Vihar", line: "Magenta" }
  ],
  "Vasant Vihar": [
    { station: "Shankar Vihar", line: "Magenta" },
    { station: "Munirka", line: "Magenta" }
  ],
  "Munirka": [
    { station: "Vasant Vihar", line: "Magenta" },
    { station: "R.K. Puram", line: "Magenta" }
  ],
  "R.K. Puram": [
    { station: "Munirka", line: "Magenta" },
    { station: "IIT Delhi", line: "Magenta" }
  ],
  "IIT Delhi": [
    { station: "R.K. Puram", line: "Magenta" },
    { station: "Hauz Khas", line: "Magenta" }
  ],
  "Panchsheel Park": [
    { station: "Chirag Delhi", line: "Magenta" },
    { station: "Okhla NSIC", line: "Violet" }
  ],
  "Kalkaji Mandir": [
    { station: "Nehru Place", line: "Magenta" },
    { station: "Govind Puri", line: "Yellow" },
    { station: "Nehru Enclave", line: "Violet" }
  ]
};