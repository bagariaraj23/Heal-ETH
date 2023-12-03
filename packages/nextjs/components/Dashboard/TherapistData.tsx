// src/data/therapistsData.ts
interface Therapist {
    title: string;
    imageUrl: string;
    description: string;
    price: string;
    speciality: string;
  }
  
  const therapistsData: Therapist[] = [
        {
          "title": "Dr. John Smith",
          "imageUrl": "https://cdn.mindpeers.co/users/profile/c86a1d0f-91ff-4394-8bf5-067898dcc9ee.png",
          "description": "Experienced therapist specializing in anxiety and stress management.",
          "price": "$150 ",
          "speciality": "Anxiety and Stress Management"
        },
        {
          "title": "Dr. Emily Johnson",
          "imageUrl": "https://cdn.mindpeers.co/users/profile/c86a1d0f-91ff-4394-8bf5-067898dcc9ee.png",
          "description": "Licensed psychologist with expertise in couples therapy.",
          "price": "$180 ",
          "speciality": "Couples Therapy"
        },
        {
          "title": "Dr. Michael Davis",
          "imageUrl": "https://cdn.mindpeers.co/users/profile/c86a1d0f-91ff-4394-8bf5-067898dcc9ee.png",
          "description": "Certified counselor focusing on depression and mood disorders.",
          "price": "$120 ",
          "speciality": "Depression and Mood Disorders"
        },
        {
          "title": "Dr. Samantha Wilson",
          "imageUrl": "https://cdn.mindpeers.co/users/profile/c86a1d0f-91ff-4394-8bf5-067898dcc9ee.png",
          "description": "Clinical social worker providing trauma-informed care.",
          "price": "$160 ",
          "speciality": "Trauma-Informed Care"
        },
        {
          "title": "Dr. Robert Miller",
          "imageUrl": "https://cdn.mindpeers.co/users/profile/c86a1d0f-91ff-4394-8bf5-067898dcc9ee.png",
          "description": "Licensed family therapist with a focus on communication and relationships.",
          "price": "$170 ",
          "speciality": "Family Therapy"
        },
        {
          "title": "Dr. Olivia Turner",
          "imageUrl": "https://cdn.mindpeers.co/users/profile/c86a1d0f-91ff-4394-8bf5-067898dcc9ee.png",
          "description": "Board-certified psychiatrist offering medication management.",
          "price": "$200 ",
          "speciality": "Medication Management"
        },
        {
          "title": "Dr. Christopher White",
          "imageUrl": "https://cdn.mindpeers.co/users/profile/c86a1d0f-91ff-4394-8bf5-067898dcc9ee.png",
          "description": "Experienced counselor specializing in addiction and substance abuse.",
          "price": "$140 ",
          "speciality": "Addiction and Substance Abuse"
        },
        {
          "title": "Dr. Elizabeth Harris",
          "imageUrl": "https://cdn.mindpeers.co/users/profile/c86a1d0f-91ff-4394-8bf5-067898dcc9ee.png",
          "description": "Clinical psychologist providing support for LGBTQ+ individuals.",
          "price": "$160 ",
          "speciality": "LGBTQ+ Support"
        },
        {
          "title": "Dr. Daniel Lee",
          "imageUrl": "https://cdn.mindpeers.co/users/profile/c86a1d0f-91ff-4394-8bf5-067898dcc9ee.png",
          "description": "Certified play therapist specializing in child and adolescent counseling.",
          "price": "$130 ",
          "speciality": "Child and Adolescent Counseling"
        },
        {
          "title": "Dr. Vanessa Brown",
          "imageUrl": "https://cdn.mindpeers.co/users/profile/c86a1d0f-91ff-4394-8bf5-067898dcc9ee.png",
          "description": "Licensed marriage and family therapist with a focus on communication.",
          "price": "$180",
          "speciality": "Marriage and Family Therapy"
        }
    // Add more therapists as needed...
  ];
  
  export default therapistsData;
  