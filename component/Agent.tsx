"use client"
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

enum CallStatus {
  CONNECTING = "CONNECTING",
  INACTIVE = "INACTIVE",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
}

const Agent = ({userName}:AgentProps) => {
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  const isSpeaking = true;
  const message = [
    "Hello, I am an AI interviewer. I will ask you some questions. Are you ready?",
    "Great! Let's start with the first question.",
  ];
  const lastmessage = message[message.length - 1];

  return (
    <>
    <div className="call-view">
      <div className="card-interviewer">
        <div className="avatar">
          <Image
            src="/ai-avatar.png"
            alt="vapi"
            width={65}
            height={54}
            className="object-cover"
          />
          {isSpeaking && <span className="animate-speak"></span>}
        </div>
        <h3>An Interviewer</h3>
      </div>
      <div className="card-border">
        <div className="card-content">
          <Image
            src="/user-avatar.png"
            alt="user avatar"
            height={540}
            width={540}
            className="rounded-full object-cover size-[120px]"
          />
          <h3>{userName}</h3>
        </div>
      </div>
    </div>

    {message.length>0 && (
      <div className="transcript-border">
        <div className="transcript">
          <p key={lastmessage} className={cn('transition-opacity duration-500 opacity-0', 'animate-fadeIn opacity-100')}>{lastmessage}</p>
        </div>
      </div>
    )}

    <div className="w-full flex justify-center">
      {callStatus !== 'ACTIVE' ?(
        <button className="relative btn-call">
          <span className={cn('absolute animate-ping rounded-lg opacity-75', callStatus !== 'CONNECTING' && 'hidden')}/>
          <span>
            {callStatus === 'INACTIVE' || callStatus === 'FINISHED' ? 'CALL' : '. . .'}
          </span>
        </button>
      ):(
        <button className="btn-disconnect">
          <span>End</span>
        </button>
      )}
    </div>
    </>
  );
};

export default Agent;
