import { KnowledgeType } from "@/types/knowledge";

export type KnowledgeManagerStoreType = {
  knowledges: Array<KnowledgeType> | undefined;
  setKnowledges: (knowledges: KnowledgeType[]) => void;
  currentKnowledge: KnowledgeType | undefined;
  currentKnowledgeId: string;
  setCurrentKnowledge: (knowledge?: KnowledgeType) => void;
};
