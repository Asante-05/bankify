"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async ({email, password}: signInProps) => {

  try {
    const { account } = await createAdminClient();
    const response = await account.createEmailPasswordSession(email, password)

    return parseStringify(response)
    
  } catch (error) {
    console.log(error)
    throw new Error('There was an error signing In')
  } finally {
  }
};

export const signUp = async (userData: SignUpParams) => {
    const {email, password, lastName, firstName} = userData
  try {
    const { account } = await createAdminClient();

    const newUserAccount = await account.create(
        ID.unique(),
        email,
        password,
        `${firstName} ${lastName}`
    );
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    return parseStringify(newUserAccount)
  } catch (error) {
    console.error("Sign-up error:", error);
    throw new Error("Sign-up failed");
  } finally {
  }
};

export async function getLoggedInUser() {
  console.log("Get User function called")
  try {
    const { account } = await createSessionClient();

    const user =  await account.get();
    console.log(user)
    return parseStringify(user)
  } catch (error) {
    console.log("getting user gone wrong")
    console.log(error)
  }
}

export async function logoutAccount (){
  try{
    const {account} = await createSessionClient();

    cookies().delete('appwrite-session')

    await account.deleteSession('session')
  } catch(error){
    console.log(error)
  } finally {

  }
}