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
          "imageUrl": "https://example.com/therapist1.jpg",
          "description": "Experienced therapist specializing in anxiety and stress management.",
          "price": "$150 ",
          "speciality": "Anxiety and Stress Management"
        },
        {
          "title": "Dr. Emily Johnson",
          "imageUrl": "https://example.com/therapist2.jpg",
          "description": "Licensed psychologist with expertise in couples therapy.",
          "price": "$180 ",
          "speciality": "Couples Therapy"
        },
        {
          "title": "Dr. Michael Davis",
          "imageUrl": "https://example.com/therapist3.jpg",
          "description": "Certified counselor focusing on depression and mood disorders.",
          "price": "$120 ",
          "speciality": "Depression and Mood Disorders"
        },
        {
          "title": "Dr. Samantha Wilson",
          "imageUrl": "https://example.com/therapist4.jpg",
          "description": "Clinical social worker providing trauma-informed care.",
          "price": "$160 ",
          "speciality": "Trauma-Informed Care"
        },
        {
          "title": "Dr. Robert Miller",
          "imageUrl": "https://example.com/therapist5.jpg",
          "description": "Licensed family therapist with a focus on communication and relationships.",
          "price": "$170 ",
          "speciality": "Family Therapy"
        },
        {
          "title": "Dr. Olivia Turner",
          "imageUrl": "https://example.com/therapist6.jpg",
          "description": "Board-certified psychiatrist offering medication management.",
          "price": "$200 ",
          "speciality": "Medication Management"
        },
        {
          "title": "Dr. Christopher White",
          "imageUrl": "https://example.com/therapist7.jpg",
          "description": "Experienced counselor specializing in addiction and substance abuse.",
          "price": "$140 ",
          "speciality": "Addiction and Substance Abuse"
        },
        {
          "title": "Dr. Elizabeth Harris",
          "imageUrl": "https://example.com/therapist8.jpg",
          "description": "Clinical psychologist providing support for LGBTQ+ individuals.",
          "price": "$160 ",
          "speciality": "LGBTQ+ Support"
        },
        {
          "title": "Dr. Daniel Lee",
          "imageUrl": "https://example.com/therapist9.jpg",
          "description": "Certified play therapist specializing in child and adolescent counseling.",
          "price": "$130 ",
          "speciality": "Child and Adolescent Counseling"
        },
        {
          "title": "Dr. Vanessa Brown",
          "imageUrl": "https://example.com/therapist10.jpg",
          "description": "Licensed marriage and family therapist with a focus on communication.",
          "price": "$180",
          "speciality": "Marriage and Family Therapy"
        }
    // Add more therapists as needed...
  ];
  
  export default therapistsData;
  