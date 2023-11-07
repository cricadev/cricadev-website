---
title: "QuizGod"
metaTitle: "QuizGod: The Pinnacle of AI-Integrated Quiz Platforms"
description: "Explore QuizGod, an AI-powered quiz app that revolutionizes learning and competition. With real-time quizzes and a live leaderboard, get ready to test your knowledge and climb the ranks each day."
img: "/quizgod_mgqnoj.png"
ogImg: "https://res.cloudinary.com/ddc0cce3m/image/upload/v1699388937/CricaDev/quizgod_mgqnoj.png"
madeWith: ["Vue", "Tailwind", "Javascript", "Nuxt", "Supabase", "OpenAI"]
tags: ["Portfolios"]
code: "https://github.com/cricadev/quizgod"
project: "https://quizgod.cricadev.com"
author: "Cricadev"

---

# QuizGod: Real-Time Quizzes Powered by AI
:HeaderSlugPortfolio{:madeWith="madeWith" :src="img" :alt="title" :githubLink="code" :projectLink="project"}

## Introduction
QuizGod stands at the intersection of advanced AI and interactive learning, presenting a dynamic platform for quiz enthusiasts and knowledge seekers alike. Powered by the cutting-edge OPEN AI API, this app delivers real-time quizzes that challenge and engage users in a unique competitive environment.

## Design Aesthetics
Crafted with precision by the esteemed Tef.dsgn, QuizGod is not only functionally robust but also visually striking. The design facilitates an immersive user experience, accommodating both light and dark mode preferences, thus catering to all users regardless of their visual comfort.

## Core Functionality
- **AI-Driven Quizzes**: Leverage the power of AI to generate quizzes in real time, ensuring a fresh and challenging experience with each attempt.
- **Real-Time Leaderboard**: A dynamically updated leaderboard tracks names and completion times, fueling a competitive spirit among participants.
- **Aesthetic Modes**: Users can switch between light and dark themes, offering a customizable quiz-taking experience that respects their visual preferences.

## Upcoming Enhancements
- **Daily Resets**: To maintain the thrill of the chase, quizzes and leaderboards will reset every 24 hours, promising new challenges and opportunities for users to claim the top spot.
- **Interactive Carousel**: The homepage carousel will soon feature hover effects and a pause function, enhancing user engagement and control.
- **Difficulty Tiers**: Quizzes will soon come in varying difficulties - easy, medium, and hard - to cater to a wider range of users, from beginners to seasoned trivia masters.

## Technical Challenges
- **AI Integration**: Implementing the OPEN AI API effectively to generate quizzes required not only technical know-how but also creative algorithmic thinking.
- **Leaderboard Mechanics**: Developing a real-time leaderboard system involved intricate backend development, ensuring accuracy and immediacy in score tracking.
- **Responsive Design**: Ensuring that the app's aesthetic appeal translated seamlessly across devices and modes was a test of adaptive and responsive design principles.

## Technical Challenges and Stack Deep-Dive
Developing QuizGod was a journey through a landscape of advanced web technologies and intricate problem-solving scenarios. The application's backbone is formed by a robust stack, carefully chosen to ensure performance, real-time capabilities, and a seamless user experience.

**Tech Stack**:

**Frontend**: Nuxt.js provides the framework, bringing server-side rendering to the table for enhanced SEO and performance. Vue.js offers the reactive components, and TailwindCSS shapes the stunning UI, ensuring a responsive and accessible design.

**Backend**: Supabase acts as the backend powerhouse with its real-time subscriptions, effortlessly syncing data across client interfaces as quiz results pour in.
State Management: Pinia is utilized for global state management, minimizing API requests by efficiently caching data and syncing state across components.

**Real-Time Data Subscription Challenges**:
Implementing real-time functionality came with its hurdles. The expectation was instantaneous updates across leaderboards; however, latency issues arose, leading to a less-than-ideal user experience. To mitigate this, a loading mechanism was engineered to provide users with visual feedback while awaiting the fresh data, ensuring the interface remained responsive and engaging.

### Optimizing API Calls:
Integrating Pinia was a strategic move to economize on API calls. By storing quiz data and user scores in a centralized store, the app reduced redundant data fetching, resulting in a faster, more cost-effective solution.

```js

// store.js
mport { defineStore, acceptHMRUpdate } from "pinia";
import type { Quiz, LeaderboardEntry } from "~/types/index"
export const useQuizStore = defineStore('quizStore', () => {
  const { chatCompletion } = useChatgpt()
  const supabase = useSupabaseClient()
  const name = ref('');
  const quizzes = ref([] as Quiz[]);
  const storedQuizzes = ref([] as Quiz[])
  const leaderboard = ref([])
  onMounted(() => {
    storedQuizzes.value = JSON.parse(localStorage.getItem('quizzes') || '[]');

    if (storedQuizzes.value.length > 0) {
      quizzes.value = storedQuizzes.value
    }
  })



  const fetchQuizBySlug = async (slug: string, message: string) => {

    let quiz = quizzes.value.find(q => q.id === slug);

    // If the quiz already exists, return it
    if (quiz) {
      return quiz;
    }
    const maxRetries = 3; // Maximum number of retries
    let retries = 0; // Current retry count

    while (retries < maxRetries) {
      try {
        const rawResponse = await chatCompletion(message.value);
        const parsedResponse = JSON.parse(rawResponse);

        if (parsedResponse && parsedResponse.questions) {
          const newQuiz = {
            id: slug,
            name: name.value,
            correctAnswers: 0,
            time: 0,
            questions: parsedResponse.questions,
            timestamp: new Date().getTime(), // Store the timestamp of when the quiz was created
          };

          // Push the new quiz to the array
          storedQuizzes.value.push(newQuiz);

          // Update the quizzes ref
          quizzes.value = storedQuizzes.value;

          // Store the updated quizzes array back to localStorage
          localStorage.setItem('quizzes', JSON.stringify(storedQuizzes.value));

          // Return the new quiz
          return newQuiz;
        } else {
          console.error('Unexpected response structure');
          retries++;
        }
      } catch (error) {
        console.error('An error occurred:', error);
        retries++;
      }
    }

    throw new Error('Failed to fetch quiz after ' + maxRetries + ' attempts');
  };
```

### Unforeseen Subscription Delay & Real Time Data Fetching:
A significant challenge was the occasional delay in Supabase's real-time subscription, which led to a momentary disconnection between the user's action and the leaderboard's update. Solving this required implementing a custom loader that would activate during data fetching, providing a seamless experience even when faced with unforeseen network latency.

```js
// Leaderboard.vue
 / Function to read leaderboard data
const readLeaderboard = async (slug: string) => {
  try {
    // Fetch leaderboard data from the 'leaderboard' table where 'quiz_slug' equals the provided slug
    // Order the results by 'time_taken' in ascending order
    const { data, error } = await supabase
      .from('leaderboard')
      .select('*')
      .eq('quiz_slug', slug)
      .order('time_taken', { ascending: true });

    // If there's an error, throw it
    if (error) {
      throw error;
    }

    // Create a reactive reference to the fetched data
    const updatedData = ref(data);

    // Subscribe to the 'custom-insert-channel' to listen for INSERT events on the 'leaderboard' table
    const leaderboardInserts = supabase.channel('custom-insert-channel')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'leaderboard' },
        async (payload) => {
          console.log('Insert received!', payload);
          // When an INSERT event is received, fetch the updated leaderboard data
          const { data: newData, error: updatedError } = await supabase
            .from('leaderboard')
            .select('*')
            .eq('quiz_slug', slug)
            .order('time_taken', { ascending: true });

          // If there's an error, log it and return
          if (updatedError) {
            console.error('Error getting updated leaderboard:', updatedError);
            return;
          }

          // Update the reactive reference with the new data
          updatedData.value = newData;
        }
      )
      .subscribe();

    // Subscribe to the 'custom-update-channel' to listen for UPDATE events on the 'leaderboard' table
    const leaderboardUpdates = supabase.channel('custom-update-channel')
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'leaderboard' },
        async (payload) => {
          console.log('Update received!', payload);
          // When an UPDATE event is received, fetch the updated leaderboard data
          const { data: newData, error: updatedError } = await supabase
            .from('leaderboard')
            .select('*')
            .eq('quiz_slug', slug)
            .order('time_taken', { ascending: true });

          // If there's an error, log it and return
          if (updatedError) {
            console.error('Error getting updated leaderboard:', updatedError);
            return;
          }

          // Update the reactive reference with the new data
          updatedData.value = newData;
        }
      )
      .subscribe();

    // Update the leaderboard value with the updated data
    leaderboard.value = updatedData.value

    // Return the updated data and the subscriptions
    return { data: updatedData, leaderboardInserts, leaderboardUpdates };


    } catch (error) {
      console.error('Error getting leaderboard:', error);
    }
  }

```

```js
// Index.vue
// Watch for changes in the 'resultSent' reactive reference
watch(resultSent, (newValue) => {
  // If 'resultSent' changes to a truthy value
  if (newValue) {
    // Set a timeout to delay the execution of the following code by 3000 milliseconds (3 seconds)
    setTimeout(async () => {
      // Call the 'readLeaderboard' function with the 'slug' parameter from the route
      // This function fetches the leaderboard data for the given quiz
      const data = await readLeaderboard(route.params.slug);
      
      // If the fetched data is truthy (i.e., the leaderboard data was successfully fetched)
      // Set 'loadingLeaderboard' to false to indicate that the leaderboard data has finished loading
      if (data.data.value) loadingLeaderboard.value = false;
    }, 3000)
  }
});
```
**Advancing the Stack**:
The development of QuizGod pushed the boundaries of my technical skill set. Working with Nuxt.js modules expanded my understanding of server-side nuances in a Vue.js environment

## Final Thoughts
QuizGod is more than a quiz app; it's a testament to the fusion of technology and user-centric design. As a Vue.js developer, this project embodies my commitment to creating experiences that are not only intellectually stimulating but also technologically advanced and visually appealing.
