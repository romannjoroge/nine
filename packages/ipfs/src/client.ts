import "dotenv/config";
import {PinataSDK} from 'pinata';
// console.log(process.env.PINARA_KEY);
// console.log(process.env.PINATA_GATEWAY);
// const pinata = new PinataSDK({
//     pinataJwt: process.env.PINARA_KEY  ?? "eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI1OWEwNmUyMi0xYjMxLTRjOTItOWI3ZC1lOWRmZGQ4OTJiMDIiLCJlbWFpbCI6InBhc2hyaWNrMjM3QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJmYjJkYzM5N2FhMTJiNTJhM2JkMiIsInNjb3BlZEtleVNlY3JldCI6Ijc3MmJjMjM5YTkyOTZiMGMwNmFkOGE4OWEyNDM1YThmZmVjM2M4OGEyOGY0ZGY4YTQ5NzkyMjZlNWZhOTgwYTMiLCJpYXQiOjE3MjM5OTA5Mjl9",
//     pinataGateway: process.env.PINATA_GATEWAY ?? "orange-worldwide-coral-413.mypinata.cloud"
// });
const pinata = new PinataSDK({
    pinataJwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI1OWEwNmUyMi0xYjMxLTRjOTItOWI3ZC1lOWRmZGQ4OTJiMDIiLCJlbWFpbCI6InBhc2hyaWNrMjM3QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiIxYzA2NTEyMTcwMTA5YTE3Mjk4MSIsInNjb3BlZEtleVNlY3JldCI6ImEzNDZiYzAzNzAxOWQ3MWUwZjUzYzAwNGI5ZmMyY2U0ZTVhZjQxMDNjMzU4YzZkY2M1NzdhNTg0ODM4MzFhZDkiLCJleHAiOjE3NTU1OTIyNTd9.DkeuLZbRSY_eEQYr2qFP3U5w4bzqyFk2AEP_pME9PZ8",
    pinataGateway: "orange-worldwide-coral-413.mypinata.cloud"
});
export default pinata;
