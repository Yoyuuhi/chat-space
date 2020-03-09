# Chat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false, unique: true|
|password|integer|null: false|
|username|string|null: false, unique: true|

### Association
- has_many :messages
- has_many :users_groups
- has_many :groups, through: :users_groups

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- has_many :messages_groups
- has_many :groups, through: :messages_groups

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|groupname|text|null: false, unique: true|
### Association
- has_many :users_groups
- has_many :users, through: :users_groups
- has_many :messages_groups
- has_many :messages, through: :messages_groups

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## messages_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|message_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :message
- belongs_to :group