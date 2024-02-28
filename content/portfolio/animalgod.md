---
title: "AnimalGod"
metaTitle: "AnimalGod: Revolutionizing Pet Adoption and Shelter Engagement"
description: "Discover AnimalGod, the innovative platform connecting animal lovers with shelters. Experience seamless pet adoption, share stories, and join our community dedicated to improving animal welfare. Start your journey today."
img: "/animalgodMockup_afggke.png"
ogImg: "https://res.cloudinary.com/ddc0cce3m/image/upload/v1709138597/CricaDev/animalgodMockup_afggke.png"
madeWith: ["Vue", "Nuxt", "Tailwind", "Supabase", "Prisma", "Typescript", "Pinia"]
tags: ["Portfolios"]
code: "https://github.com/cricadev/AnimalGod"
project: "https://animalgod.cricadev.com"
author: "Cricadev"

---

# AnimalGod: Connecting Animal Lovers and Shelters
:HeaderSlugPortfolio{:madeWith="madeWith" :src="img" :alt="title" :githubLink="code" :projectLink="project"}


## Introduction

Welcome to the case study of AnimalGod, a full-stack web application designed to bridge the gap between animal shelters and pet enthusiasts. Our mission with AnimalGod was to create a user-friendly platform where animal lovers could share stories, adopt pets, and connect with shelters. This case study will walk you through the project's conception, design, development, and the unique features that set AnimalGod apart.

## Project Overview

**Objective:** To develop a comprehensive platform for animal lovers and shelters, facilitating the adoption process and creating a community around animal welfare.

**Target Audience:** Animal lovers looking to adopt pets and animal shelters seeking a platform to showcase their animals.

**Technologies Used:** Nuxt.js 3, Vue.js 3, TailwindCSS for frontend development; Supabase and PrismaORM for backend services.

## Features

1. **UI/UX Design:** We implemented a beautiful, intuitive design accessible in both light and dark modes to cater to user preferences and enhance readability.

2. **Authentication System:** Users can sign up as either a shelter, enabling them to register animals and manage applications, or as a client, allowing them to browse available animals and apply for adoption.

3. **Profile Management:** Users can update personal information, upload profile images, and, for shelters, add details like address and website.

4. **Animal Registration Form:** Shelters can register animals through a comprehensive form, capturing essential details to attract potential adopters.

5. **Individual Animal Pages:** Each animal has a dedicated page featuring images, health conditions, history, and personality, alongside an application form for adoption, also the option to edit their pet profile anytime.

6. **Application Management:** Users can track the status of their applications, while shelters can manage received applications and communicate with applicants directly through the platform.

## Challenges and Solutions

Throughout the development of AnimalGod, we faced several challenges:

1. **User Experience:** Ensuring the platform was intuitive and user-friendly for a diverse audience. 
   **Solution:** Conducted extensive UX research and iterated designs based on user feedback.
:IFrame{:src="https://www.behance.net/embed/project/160199813?ilo0=1" :title="title" :width="560" :height="315"}
2. **Data Management:** Handling the vast amount of data from shelters and clients efficiently. 
   **Solution:** Utilized Supabase and PrismaORM to create a scalable, secure backend.

```prisma
model Shelter {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique @default("default@email.com")
  pets      Pet[] // Relation to the pets they have listed
  country   String
  phone     String
  image     String?
  address   String?
  website   String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Add other fields like address, contact number, etc.
}

// Model for the clients
model Client {
  id           Int           @id @default(autoincrement())
  name         String
  email        String        @unique
  appointments Appointment[] // Relation to their set appointments
  country      String
  phone        String
  image        String?
  createdAt    DateTime      @default(now())
  updatedAt    DateTime      @updatedAt

  // You can add other fields specific to clients if necessary
}

// Model for the pets listed for adoption
model Pet {
  id                     Int                     @id @default(autoincrement())
  type                   String // e.g., Dog, Cat, etc.
  name                   String
  images                 String[] // URLs of uploaded images
  gender                 Gender
  size                   Size // e.g., Small, Medium, Large, etc.
  age                    Age
  breed                  String // e.g., Golden Retriever, Siamese, etc.
  goodWith               GoodWith
  activity               ActivityLevel // e.g., Low, Medium, High, etc.
  history                String                  @db.VarChar(2000)
  personality            personalityAdjectives[]
  personalityDescription String                  @db.VarChar(2000)
  healthConditions       Json
  healthDescription      String?                 @db.VarChar(2000)
  isAdopted              Boolean                 @default(false)
  shelterId              Int? // Foreign Key relation to Shelter
  shelter                Shelter?                @relation(fields: [shelterId], references: [id])
  appointments           Appointment[] // Relation to appointments set for this pet
  createdAt              DateTime                @default(now())
  updatedAt              DateTime                @updatedAt
}

// Model for the appointments set by clients for specific pets
model Appointment {
  id                  Int        @id @default(autoincrement())
  liveWith            liveWith[]
  liveWithDescription String     @db.VarChar(2000)
  liveIn              Boolean
  isRenting           Boolean
  rentAcceptance      Boolean?
  qAndA               Json
  qAndADescription    String     @db.VarChar(2000)
  whyMessage          String     @db.VarChar(2000)
  clientId            Int // Foreign Key relation to Client
  client              Client     @relation(fields: [clientId], references: [id])
  petId               Int // Foreign Key relation to Pet
  pet                 Pet        @relation(fields: [petId], references: [id])
  acceptedForm        FormStatus @default(IN_PROCESS)
  createdAt           DateTime   @default(now())
  updatedAt           DateTime   @updatedAt
  // You can add other fields specific to appointment details if necessary
}

```


3. **Adoption Process:** Streamlining the adoption application process to be user-friendly yet comprehensive for shelters. 
   **Solution:** Developed a multi-step form with conditional logic to ensure all necessary information was collected efficiently.
  
  

:IFrame{:src="https://www.youtube.com/embed/caM9oChQP5k?si=Wihfi0_KWX5Armrc" :title="title" :width="560" :height="315"}

   


## Results and Impact

Since its launch, AnimalGod has successfully facilitated numerous pet adoptions, with positive feedback from both shelters and clients. The platform has seen a significant increase in user engagement and shelter registrations, demonstrating its value and effectiveness in the animal welfare community.

## Additional Challenges and Solutions
### Server API Routes and Database Interaction
**Challenge:**
One of the significant challenges was establishing efficient server API routes to interact seamlessly with the database. Ensuring secure, fast, and reliable data transactions was crucial for supporting the dynamic content of AnimalGod.

**Solution:**
To tackle this, I utilized RESTful API principles and Nuxt.js's serverMiddleware to create a seamless interface between the front end and the PrismaORM-managed database. I implemented JWT for authentication and conducted rigorous security and efficiency tests.

```ts
--- PET.PATCH.TS ---
import { PrismaClient, personalityAdjectives } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { id } = getQuery(event)
  const shelter = await prisma.shelter.findUnique({
    where: {
      email: body.email,
    }
  });
  const res = await prisma.pet.update({
    where: {
      id: Number(id), // assuming the id is in the query parameters
    },
    data: {
      type: body.type,
      name: body.name,
      images: body.images,
      gender: body.gender.toUpperCase(),
      size: body.size.toUpperCase(),
      age: body.age,
      breed: body.breed.toUpperCase().replace(/\s/g, '_'),
      goodWith: body.goodWith.toUpperCase(),
      activity: body.activity.toUpperCase(),
      history: body.history,
      personality: body.personality.map((p: string) => personalityAdjectives[p.toUpperCase()]),
      personalityDescription: body.personalityDescription,
      healthConditions: body.healthConditions,
      healthDescription: body.healthDescription,
      isAdopted: body.isAdopted,
      shelterId: shelter?.id,
      createdAt: body.createdAt,
      updatedAt: body.updatedAt,
    },
  });

  return {
    status: 200,
    body: JSON.stringify(res),
  };
})

--- MIDDLEWARE ---
export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();
  if (!user.value) {
    return navigateTo("/login");
  }
});

```

### State Management with Pinia
**Challenge:** 
Maintaining a consistent application state across all pages was essential, particularly with dynamic content such as loaders and real-time updates.

**Solution:**
I integrated Pinia for state management due to its compatibility with Vue.js 3 and Nuxt.js 3, creating separate stores for user authentication, animal profiles, and application statuses. This ensured a smooth and maintainable state management system.


```ts
--- A PEEK OF USER SESSION STORE THAT TRACKS WHICH USER IS AND GIVE US REAL TIME DATA ---
import { defineStore, acceptHMRUpdate } from "pinia";

export const useUserSessionStore = defineStore("UserSessionStore", () => {
  const user = useSupabaseUser();
  const session = ref(null);
  const fetchResult = ref(null);
  const itemsPets = ref(null);
  const loadingPets = ref(false);

// function that fetches based on the user form registration
  const fetchUserData = async (newUser) => {
    try {
      if (newUser) {
        if (newUser.user_metadata.isShelter) {
          loadingPets.value = true

          fetchResult.value = await $fetch(`/api/shelter`);

        } else {
          loadingPets.value = true

          fetchResult.value = await $fetch(`/api/client`);

        }

        if (!fetchResult.value) {
          throw new Error('Error creating client')
        }
        itemsPets.value = fetchResult.value
        loadingPets.value = false

      }
    } catch (error) {
      throw createError({
        fatal: true,
        statusCode: 500,
        statusMessage: 'Error fetching user data'
      });
    }


  };
  const userWatcher = watch(user, fetchUserData, { deep: true });


  const state = reactive({
    currentPrismaUser: reactive({
      id: "",
      name: "",
      email: "",
      address: "",
      website: "",
      image: "",
      phone: "",
    }),
    loading: true
    // ...
  },
  );
  // state to get the currentPrismaUser and update the fields on profile section

  const { currentPrismaUser, loading } = toRefs(state);


  const getCurrentUser = async () => {
    loading.value = true
    try {
      if (user.value.user_metadata?.isShelter) {
        const data = await $fetch(`/api/id?email=${user.value.email}&isShelter=true`)
        if (!data) {
          throw new Error('Error getting user')
        }

        console.log(data)
        currentPrismaUser.value = data
        loading.value = false



      } else if (!user.value.user_metadata?.isShelter) {
        const data = await $fetch(`/api/id?email=${user.value.email}`)
        if (!data) {
          throw new Error('Error getting user')
        }

        console.log(data)
        currentPrismaUser.value = data
        loading.value = false

      }

    } catch (error) {
      throw createError({
        fatal: true,
        statusCode: 500,
        statusMessage: 'Error getting current user'
      });
    }

  }

  watch(user, async (newUser) => {
    try {
      if (newUser) {
        await getCurrentUser()
        fetchUserData(user.value);
      }
    } catch (error) {
      throw createError({
        fatal: true,
        statusCode: 500,
        statusMessage: 'Error watching user'
      });
    }
  })});
```




### Implementation of Loaders and Feedback Mechanisms
**Challenge:**
Providing immediate and clear feedback to users during data loading or submission processes was necessary to maintain user engagement and clarity.

**Solution:**
I implemented dynamic loaders and toast notifications for real-time user feedback during data fetching or form submissions. This approach improved the interactive nature of the platform and kept users well-informed of the application's state.

:Loader{:profile="true"}


## Future Plans

We are dedicated to continuously improving AnimalGod and have exciting plans for future features, including:

- An AI-powered quiz to match potential adopters with their ideal pet breed based on scientifically researched questions.

## Conclusion

AnimalGod stands as a testament to the power of technology in making a positive impact on animal welfare. Our journey in developing this platform has been incredibly rewarding, and we look forward to its continued growth and the further success stories it will enable.

## Acknowledgments

I would like to thank [TEF.dsgn](https://www.behance.net/TEF-dsgn) for their support and contribution to the success of AnimalGod.
