import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig: FirebaseConfig = {
    apiKey: import.meta.env.VITE_FB_API_KEY,
    authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FB_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FB_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FB_APP_ID,
    measurementId: import.meta.env.VITE_FB_MEASUREMENT_ID
  };
// Initialize Firebase
// @ts-ignore
const app = initializeApp(firebaseConfig);
import { getAuth } from "firebase/auth";
import { Insults, FirebaseConfig } from "./types";
const auth = getAuth(app);
const user = auth.currentUser;
export const userInsults: Insults = [
    `If there was ever one person who I hated the most, it would be ${user?.displayName ?? "this guest user"}`,
    `I heard ${user?.displayName ?? "this guest user"} is a really bad person`,
    `I would give you an insult, but I think ${user?.displayName ?? "this guest user"} is too self-righteous to hear it`,
    `${user?.displayName ?? "this guest user"} is the worst person I know`,
    `If there would ever be just a sterotypical stupid person, it would be ${user?.displayName ?? "this guest user"}`,
    `What if ${user?.displayName ?? "this guest user"} was a real person?`,
    `Can you walk to the bathroom and tell me how ${user?.displayName ?? "this guest user"} is feeling? I heard he's crying in there`,
    `${user?.displayName ?? "this guest user"} is the worst person I know`,
    `Today, we come to mourn the death of ${user?.displayName ?? "this guest user"}`,
    `Today, I have to tell you how ${user?.displayName ?? "this guest user"} is a bad person`,
    `${user?.displayName ?? "this guest user"} is the worst person I know`,
    `It's sad to see ${user?.displayName ?? "this guest user"}. Thats it. I'm just going to leave.`,
    `${user?.displayName ?? "this guest user"}'s personality is about as interesting as a burnt match`,
    `I wouldn't trust ${user?.displayName ?? "this guest user"} with a blade of grass`,
    `It must have been raining when ${user?.displayName ?? "this guest user"} was born`,
    `${user?.displayName ?? "this guest user"} is so ugly, even their mom is jealous`,
    `${user?.displayName ?? "this guest user"} is so vile.`
]