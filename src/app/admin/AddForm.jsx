"use client";

import { useState } from "react";

export default function AddForm() {
    const [newTicket, setNewTicket] = useState({
        go: "",
        goTime: "",
        goAmPm: "",
        in: "",
        inTime: "",
        inAmPm: "",
        seat: "",
        terminal: "",
        gate: "",
        company: "",
        companyImg: "",
    });

    function handleInputChange(e) {
        const { name, value } = e.target;
        setNewTicket(function (prev) {
            return {
                ...prev,
                [name]: value,
            };
        });
        console.log(name, value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch("/api/addTicket", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTicket),
            });
            //! 여기서 문제 발생함. 아마 response가 안 들어오는것 같음
            if (!response.ok) {
                throw new Error("실패야 돌아가");
            }
            const result = await response.json();
            console.log("Data submitted:", result);
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="">
                    <span>출국 국가</span>
                    <input
                        className="text-input"
                        type="text"
                        name="go"
                        placeholder="출국할 국가를 입력하세요."
                        onChange={handleInputChange}
                    />
                </label>
                <label htmlFor="">
                    <span>출국 시간</span>
                    <input
                        className="text-input"
                        type="text"
                        name="goTime"
                        placeholder="출국할 시간을 입력하세요."
                        onChange={handleInputChange}
                    />
                </label>
                <label htmlFor="">
                    <span>출국 AM, PM</span>
                    <input
                        className="text-input"
                        type="text"
                        name="goAmPm"
                        placeholder="출국 시간의 오전, 오후를 입력하세요."
                        onChange={handleInputChange}
                    />
                </label>
                <label htmlFor="">
                    <span>입국 국가</span>
                    <input
                        className="text-input"
                        type="text"
                        name="in"
                        placeholder="입국할 국가를 입력하세요."
                        onChange={handleInputChange}
                    />
                </label>
                <label htmlFor="">
                    <span>입국 시간</span>
                    <input
                        className="text-input"
                        type="text"
                        name="inTime"
                        placeholder="입국할 시간을 입력하세요."
                        onChange={handleInputChange}
                    />
                </label>
                <label htmlFor="">
                    <span>입국 AM, PM</span>
                    <input
                        className="text-input"
                        type="text"
                        name="inAmPm"
                        placeholder="입국 시간의 오전, 오후를 입력하세요."
                        onChange={handleInputChange}
                    />
                </label>
                <label htmlFor="">
                    <span>좌석 번호</span>
                    <input
                        className="text-input"
                        type="text"
                        name="seat"
                        placeholder="좌석 번호를 입력하세요."
                        onChange={handleInputChange}
                    />
                </label>
                <label htmlFor="">
                    <span>터미널 번호</span>
                    <input
                        className="text-input"
                        type="text"
                        name="terminal"
                        placeholder="터미널 번호를 입력하세요."
                        onChange={handleInputChange}
                    />
                </label>
                <label htmlFor="">
                    <span>게이트 번호</span>
                    <input
                        className="text-input"
                        type="text"
                        name="gate"
                        placeholder="게이트 번호를 입력하세요."
                        onChange={handleInputChange}
                    />
                </label>
                <label htmlFor="">
                    <span>항공사</span>
                    <input
                        className="text-input"
                        type="text"
                        name="company"
                        placeholder="항공사를 입력하세요."
                        onChange={handleInputChange}
                    />
                </label>
                <label htmlFor="">
                    <span>항공사 영어</span>
                    <input
                        className="text-input"
                        type="text"
                        name="companyImg"
                        placeholder="항공사의 영문을 입력하세요."
                        onChange={handleInputChange}
                    />
                </label>
                <div className="btn-wrap">
                    <button type="submit">Add</button>
                </div>
            </form>
        </>
    );
}
