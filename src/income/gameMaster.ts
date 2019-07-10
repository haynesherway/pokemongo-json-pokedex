export interface RootObject {
  itemTemplates: ItemTemplate[];
  timestampMs: string;
  version: string;
}
export interface ItemTemplate {
  templateId: string;
  avatarCustomization?: AvatarCustomization;
  backgroundModeSettings?: BackgroundModeSettings;
  badgeSettings?: BadgeSettings;
  battleSettings?: BattleSettings;
  belugaPokemonWhitelist?: BelugaPokemonWhitelist;
  combatLeague?: CombatLeague;
  combatLeagueSettings?: CombatLeagueSettings;
  combatSettings?: CombatSettings;
  combatStatStageSettings?: CombatStatStageSettings;
  combatMove?: CombatMove;
  encounterSettings?: EncounterSettings;
  exRaidSettings?: ExRaidSettings;
  formSettings?: FormSettings;
  friendshipMilestoneSettings?: FriendshipMilestoneSettings;
  gymBadgeSettings?: GymBadgeSettings;
  gymLevel?: GymLevel;
  iapCategoryDisplay?: IapCategoryDisplay;
  iapSettings?: IapSettings;
  itemSettings?: ItemSettings;
  luckyPokemonSettings?: LuckyPokemonSettings;
  playerLevel?: PlayerLevel;
  pokemonScaleSettings?: PokemonScaleSettings;
  typeEffective?: TypeEffective;
  pokemonUpgrades?: PokemonUpgrades;
  questSettings?: QuestSettings;
  genderSettings?: GenderSettings;
  combatNpcTrainer?: CombatNpcTrainer;
  combatNpcPersonality?: CombatNpcPersonality;
  pokemonSettings?: PokemonSettings;
  moveSettings?: MoveSettings;
  weatherAffinities?: WeatherAffinities;
  weatherBonusSettings?: WeatherBonusSettings;
  iapItemDisplay?: IapItemDisplay;
  camera?: Camera2;
  moveSequenceSettings?: MoveSequenceSettings;
  smeargleMovesSettings?: SmeargleMovesSettings;
}
export interface MoveSequenceSettings {
  sequence: string[];
}
export interface Camera2 {
  interpolation: string[];
  targetType: string[];
  easeInSpeed: number[];
  easeOutSpeed: number[];
  durationSeconds: number[];
  waitSeconds: number[];
  transitionSeconds: number[];
  angleDegree: number[];
  angleOffsetDegree: number[];
  pitchDegree: number[];
  pitchOffsetDegree: number[];
  rollDegree: number[];
  distanceMeters: number[];
  heightPercent: number[];
  vertCtrRatio: number[];
  nextCamera?: string;
}
export interface IapItemDisplay {
  sku: string;
  category: string;
  sortOrder: number;
  sale: boolean;
  hidden?: boolean;
}
export interface WeatherBonusSettings {
  cpBaseLevelBonus: number;
  guaranteedIndividualValues: number;
  stardustBonusMultiplier: number;
  attackBonusMultiplier: number;
  raidEncounterCpBaseLevelBonus: number;
  raidEncounterGuaranteedIndividualValues: number;
}
export interface WeatherAffinities {
  weatherCondition: string;
  pokemonType: string[];
}
export interface MoveSettings {
  movementId: string;
  animationId: number;
  pokemonType: string;
  power?: number;
  accuracyChance: number;
  criticalChance?: number;
  staminaLossScalar?: number;
  trainerLevelMin: number;
  trainerLevelMax: number;
  vfxName: string;
  durationMs: number;
  damageWindowStartMs: number;
  damageWindowEndMs: number;
  energyDelta?: number;
  healScalar?: number;
}
export interface PokemonSettings {
  pokemonId: string;
  modelScale: number;
  type: string;
  type2?: string;
  camera: Camera;
  encounter: Encounter;
  stats: Stats;
  quickMoves?: string[];
  cinematicMoves?: string[];
  animationTime: number[];
  evolutionIds?: string[];
  evolutionPips: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  heightStdDev: number;
  weightStdDev: number;
  familyId: string;
  candyToEvolve?: number;
  kmBuddyDistance: number;
  modelHeight: number;
  evolutionBranch?: EvolutionBranch[];
  modelScaleV2: number;
  buddyOffsetMale: number[];
  buddyOffsetFemale: number[];
  buddyScale: number;
  buddyPortraitOffset: number[];
  thirdMove: ThirdMove;
  isTransferable?: boolean;
  isDeployable?: boolean;
  parentPokemonId?: string;
  buddySize?: string;
  combatShoulderCameraAngle?: number[];
  combatDefaultCameraAngle?: number[];
  combatPlayerFocusCameraAngle?: number[];
  form?: string;
  rarity?: string;
  combatOpponentFocusCameraAngle?: number[];
}
export interface ThirdMove {
  stardustToUnlock: number;
  candyToUnlock: number;
}
export interface EvolutionBranch {
  evolution: string;
  candyCost?: number;
  form?: string;
  evolutionItemRequirement?: string;
  kmBuddyDistanceRequirement?: number;
}
export interface Stats {
  baseStamina: number;
  baseAttack: number;
  baseDefense: number;
}
export interface Encounter {
  baseCaptureRate?: number;
  baseFleeRate?: number;
  collisionRadiusM: number;
  collisionHeightM: number;
  collisionHeadRadiusM: number;
  movementType?: string;
  movementTimerS: number;
  jumpTimeS?: number;
  attackTimerS: number;
  attackProbability?: number;
  dodgeProbability?: number;
  dodgeDurationS: number;
  dodgeDistance: number;
  cameraDistance: number;
  minPokemonActionFrequencyS: number;
  maxPokemonActionFrequencyS: number;
  bonusCandyCaptureReward?: number;
  bonusStardustCaptureReward?: number;
}
export interface Camera {
  diskRadiusM: number;
  cylinderRadiusM: number;
  cylinderHeightM: number;
  shoulderModeScale?: number;
  cylinderGroundM?: number;
}
export interface CombatNpcPersonality {
  personalityName: string;
  superEffectiveChance: number;
  specialChance: number;
  offensiveMinimumScore: number;
  offensiveMaximumScore: number;
}
export interface CombatNpcTrainer {
  trainerName: string;
  combatLeagueTemplateId: string;
  combatPersonalityId: string;
  avatar: Avatar;
  availablePokemon: AvailablePokemon[];
  trainerTitle: string;
  trainerQuote: string;
}
export interface AvailablePokemon {
  pokemonType: string;
  pokemonDisplay?: PokemonDisplay;
}
export interface PokemonDisplay {
  form: string;
}
export interface Avatar {
  avatar: number;
}
export interface GenderSettings {
  pokemon: string;
  gender: Gender;
}
export interface Gender {
  malePercent?: number;
  femalePercent?: number;
  genderlessPercent?: number;
}
export interface QuestSettings {
  questType: string;
  dailyQuest: DailyQuest;
}
export interface DailyQuest {
  bucketsPerDay: number;
  streakLength: number;
  bonusMultiplier?: number;
  streakBonusMultiplier?: number;
}
export interface PokemonUpgrades {
  upgradesPerLevel: number;
  allowedLevelsAbovePlayer: number;
  candyCost: number[];
  stardustCost: number[];
}
export interface TypeEffective {
  attackScalar: number[];
  attackType: string;
}
export interface PokemonScaleSettings {
  pokemonScaleMode?: string;
  minHeight: number;
  maxHeight: number;
}
export interface PlayerLevel {
  rankNum: number[];
  requiredExperience: number[];
  cpMultiplier: number[];
  maxEggPlayerLevel: number;
  maxEncounterPlayerLevel: number;
  maxQuestEncounterPlayerLevel: number;
}
export interface LuckyPokemonSettings {
  powerUpStardustDiscountPercent: number;
}
export interface ItemSettings {
  itemId: string;
  itemType: string;
  category: string;
  dropTrainerLevel: number;
  food?: Food;
  potion?: Potion;
  eggIncubator?: EggIncubator;
  inventoryUpgrade?: InventoryUpgrade;
  xpBoost?: XpBoost;
  revive?: Revive;
  stardustBoost?: StardustBoost;
}
export interface StardustBoost {
  stardustMultiplier: number;
  boostDurationMs: number;
}
export interface Revive {
  staPercent: number;
}
export interface XpBoost {
  xpMultiplier: number;
  boostDurationMs: number;
}
export interface InventoryUpgrade {
  additionalStorage: number;
  upgradeType: string;
}
export interface EggIncubator {
  incubatorType: string;
  uses?: number;
  distanceMultiplier: number;
}
export interface Potion {
  staAmount?: number;
  staPercent?: number;
}
export interface Food {
  itemEffect: string[];
  itemEffectPercent: number[];
  growthPercent?: number;
  berryMultiplier?: number;
  remoteBerryMultiplier?: number;
}
export interface IapSettings {
  dailyDefenderBonusPerPokemon: number[];
  dailyDefenderBonusMaxDefenders: number;
  dailyDefenderBonusCurrency: string[];
  minTimeBetweenClaimsMs: string;
}
export interface IapCategoryDisplay {
  category: string;
  sortOrder: number;
  bannerEnabled?: boolean;
  imageUrl?: string;
  description?: string;
  bannerTitle?: string;
}
export interface GymLevel {
  requiredExperience: number[];
  leaderSlots: number[];
  trainerSlots: number[];
}
export interface GymBadgeSettings {
  target: number[];
  battleWinningScorePerDefenderCp: number;
  gymDefendingScorePerMinute: number;
  berryFeedingScore: number;
  pokemonDeployScore: number;
  raidBattleWinningScore: number;
  loseAllBattlesScore: number;
}
export interface FriendshipMilestoneSettings {
  milestoneXpReward: number;
  attackBonusPercentage: number;
  unlockedTrading: string[];
  minPointsToReach?: number;
  raidBallBonus?: number;
  tradingDiscount?: number;
}
export interface FormSettings {
  pokemon: string;
  forms?: Form[];
}
export interface Form {
  form: string;
  assetBundleValue?: number;
}
export interface ExRaidSettings {
  minimumExRaidShareLevel: string;
}
export interface EncounterSettings {
  spinBonusThreshold: number;
  excellentThrowThreshold: number;
  greatThrowThreshold: number;
  niceThrowThreshold: number;
  milestoneThreshold: number;
  arPlusModeEnabled: boolean;
  arCloseProximityThreshold: number;
  arLowAwarenessThreshold: number;
}
export interface CombatMove {
  uniqueId: string;
  type: string;
  power?: number;
  vfxName: string;
  energyDelta?: number;
  durationTurns?: number;
  buffs?: Buffs;
  }
export interface Buffs {
  attackerAttackStatStageChange?: number;
  targetAttackStatStageChange?: number;
  targetDefenseStatStageChange?: number;
  targetDefenseStatStageChange?: number;
  buffActivationChance: number;
}
export interface CombatStatStageSettings {
  minimumStatStage: number;
  maximumStatStage: number;
  attackBuffMultiplier: number[];
  defenseBuffMultiplier: number[];
}
export interface CombatSettings {
  roundDurationSeconds: number;
  turnDurationSeconds: number;
  minigameDurationSeconds: number;
  sameTypeAttackBonusMultiplier: number;
  fastAttackBonusMultiplier: number;
  chargeAttackBonusMultiplier: number;
  defenseBonusMultiplier: number;
  minigameBonusBaseMultiplier: number;
  minigameBonusVariableMultiplier: number;
  maxEnergy: number;
  defenderMinigameMultiplier: number;
  changePokemonDurationSeconds: number;
  minigameSubmitScoreDurationSeconds: number;
  quickSwapCooldownDurationSeconds: number;
}
export interface CombatLeagueSettings {
  combatLeagueTemplateId: string[];
}
export interface CombatLeague {
  title: string;
  enabled: boolean;
  pokemonCondition: PokemonCondition[];
  iconUrl: string;
  pokemonCount: number;
  bannedPokemon: string[];
  badgeType: string;
  unlockCondition?: UnlockCondition[];
}
export interface UnlockCondition {
  type: string;
  minPokemonCount: number;
  withPokemonCpLimit: WithPokemonCpLimit2;
}
export interface WithPokemonCpLimit2 {
  minCp: number;
  maxCp: number;
}
export interface PokemonCondition {
  type: string;
  withPokemonCpLimit: WithPokemonCpLimit;
}
export interface WithPokemonCpLimit {
  maxCp: number;
}
export interface BelugaPokemonWhitelist {
  maxAllowedPokemonPokedexNumber: number;
  additionalPokemonAllowed: string[];
  formsAllowed: string[];
  costumesAllowed: string[];
}
export interface BattleSettings {
  retargetSeconds: number;
  enemyAttackInterval: number;
  attackServerInterval: number;
  roundDurationSeconds: number;
  bonusTimePerAllySeconds: number;
  maximumAttackersPerBattle: number;
  sameTypeAttackBonusMultiplier: number;
  maximumEnergy: number;
  energyDeltaPerHealthLost: number;
  dodgeDurationMs: number;
  minimumPlayerLevel: number;
  swapDurationMs: number;
  dodgeDamageReductionPercent: number;
  minimumRaidPlayerLevel: number;
}
export interface BadgeSettings {
  badgeType: string;
  badgeRank: number;
  targets: number[];
  eventBadge?: boolean;
}
export interface BackgroundModeSettings {
  weeklyFitnessGoalLevel1DistanceKm: number;
  weeklyFitnessGoalLevel2DistanceKm: number;
  weeklyFitnessGoalLevel3DistanceKm: number;
}
export interface AvatarCustomization {
  enabled?: boolean;
  avatarType?: string;
  slot: string[];
  bundleName: string;
  assetName: string;
  groupName: string;
  sortOrder: number;
  unlockType: string;
  iapSku?: string;
  iconName: string;
  unlockBadgeType?: string;
  unlockBadgeLevel?: number;
  unlockPlayerLevel?: number;
}
export interface SmeargleMovesSettings {
    quickMoves string[];
    cinematicMoves string[];
}

