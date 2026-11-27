import { describe, it,expect } from "vitest";
import {sayHello} from "../src"
import { ERROR_MESSAGES } from "../error.msg.js"

describe("Tests for sayHello function with different values",()=>{
    it("should return 'Hello bob' when called with 'bob' as an argument",()=>{
        const r=sayHello("bob")
        expect(r).toBe("Hello bob")
    })
    it("should return an error if called with a boolean value",()=>{
        expect(()=>sayHello(true)).toThrow(ERROR_MESSAGES.stringErr)
    })
})